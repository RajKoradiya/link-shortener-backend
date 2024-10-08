import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { LongLinks } from 'src/module/long_links/entities/long_link.entity';
dotenv.config();

export const dataConfiguration: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [LongLinks],
  synchronize: true,
};
