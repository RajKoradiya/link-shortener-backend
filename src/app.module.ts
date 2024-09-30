import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseModule } from './database/database.module';

@Module({
  imports: [databaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
