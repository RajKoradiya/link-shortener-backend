import { Module } from '@nestjs/common';
import { databaseModule } from './database/database.module';
import { LongLinksModule } from './module/long_links/long_links.module';

@Module({
  imports: [databaseModule, LongLinksModule],
})
export class AppModule {}
