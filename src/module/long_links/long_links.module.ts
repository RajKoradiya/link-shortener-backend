import { Module } from '@nestjs/common';
import { longLinksRepository } from './long_links.provider';
import { databaseModule } from 'src/database/database.module';
import { longLinkService } from './long_links.service';

@Module({
  imports: [databaseModule],
  providers: [longLinkService, ...longLinksRepository],
  exports: [longLinkService],
})
export class LongLinksModule {}
