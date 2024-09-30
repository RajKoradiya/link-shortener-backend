import { DataSource } from 'typeorm';
import { dataConfiguration } from './database.config';

export const databaseProvider = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const config = dataConfiguration;
      const dataSource = new DataSource(config);

      return dataSource.initialize().then(() => console.log('connected'));
    },
  },
];
