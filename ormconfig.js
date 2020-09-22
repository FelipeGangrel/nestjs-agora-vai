const dotEnv = require('dotenv');

dotEnv.config({ path: 'env/.env' });

module.exports = {
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['src/domain/**/*.entity.ts'],
  migrations: ['src/infra/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/infra/migrations',
  },
};