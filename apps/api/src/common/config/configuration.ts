export default () => ({
  application: {
    name: process.env.APP_NAME ?? 'CoreAxis',
    description:
      process.env.APP_DESCRIPTION ?? 'CoreAxis Business Operating System',
    version: process.env.APP_VERSION ?? '0.1.0',
    environment: process.env.NODE_ENV ?? 'development',
    port: Number(process.env.PORT ?? 3001),
  },
});