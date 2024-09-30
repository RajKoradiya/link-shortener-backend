import { DataSource } from 'typeorm';
import { LongLinks } from './entities/long_link.entity';

export const longLinksRepository = [
  {
    provide: 'LONG_LINK',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(LongLinks),
    inject: ['DATA_SOURCE'],
  },
];
