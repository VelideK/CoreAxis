import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('System health (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('GET /api/v1/system/health returns a healthy status', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/system/health')
      .expect(200);

    expect(response.body).toMatchObject({
      application: 'CoreAxis',
      status: 'Healthy',
    });
    expect(response.body.timestamp).toEqual(expect.any(String));
    expect(response.body.uptime).toEqual(expect.any(Number));
  });

  afterEach(async () => {
    await app.close();
  });
});
