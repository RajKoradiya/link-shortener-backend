import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LongLinks } from './entities/long_link.entity';

@Injectable()
export class longLinkService {
  constructor(
    @Inject('LONG_LINK')
    private readonly longlink: Repository<LongLinks>,
  ) {}

  async create(linkData) {
    const newLinkData = await this.longlink.create(linkData);
    return await this.longlink.save(newLinkData);
  }

  async findById(id): Promise<LongLinks[]> {
    return await this.longlink.findBy({ short_link_id: id });
  }
}
