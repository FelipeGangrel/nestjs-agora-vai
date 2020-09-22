import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  name: process.env.TYPEORM_NAME || 'default',
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: ['true', true].includes(process.env.TYPEORM_SYNCHRONIZE),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
}));
