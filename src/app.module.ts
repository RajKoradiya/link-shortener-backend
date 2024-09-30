import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseModule } from './database/database.module';
import { LongLinksModule } from './module/long_links/long_links.module';

@Module({
  imports: [databaseModule, LongLinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
