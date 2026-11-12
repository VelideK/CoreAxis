import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth() {
    return {
      application: 'CoreAxis',
      version: '0.1.0',
      status: 'Healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}