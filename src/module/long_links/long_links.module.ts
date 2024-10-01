import { Module } from '@nestjs/common';
import { longLinksRepository } from './long_links.provider';
import { databaseModule } from 'src/database/database.module';
import { longLinkService } from './long_links.service';
import { LinkShortenerController } from './long_links.controller';

@Module({
  imports: [databaseModule],
  providers: [longLinkService, ...longLinksRepository],
  exports: [longLinkService],
  controllers: [LinkShortenerController],
})
export class LongLinksModule {}
