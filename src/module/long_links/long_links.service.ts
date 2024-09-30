import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LongLinks } from './entities/long_link.entity';

@Injectable()
export class longLinkService {
  constructor(
    @Inject('LONG_LINK')
    private readonly longlink: Repository<LongLinks>,
  ) {}

  async findAll(): Promise<LongLinks[]> {
    return this.longlink.find();
  }
}
