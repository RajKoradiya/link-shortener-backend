import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { longLinkService } from './long_links.service';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { generateUniqueIDforShortURL } from 'src/common/generateId';
// import { LongLinkDto } from './dto/long_link.dto';

@Controller()
export class LinkShortenerController {
  constructor(private readonly longlinkService: longLinkService) {}

  @Post('shorturl')
  @UseInterceptors(NoFilesInterceptor())
  async linkShortener(@Req() req) {
    const longLink = req.body.longURL;

    const id = generateUniqueIDforShortURL();

    const shortUrl = `${process.env.ORIGIN_URL}/${id}`;

    const linkData = {
      long_link: longLink,
      short_link: shortUrl,
      short_link_id: id,
    };

    const result = await this.longlinkService.create(linkData);
    return result['short_link'];
  }

  @Get(':id')
  async getLongLink(@Req() req, @Res() res) {
    const id = req.params.id;

    const result = await this.longlinkService.findById(id);

    if (result[0]) {
      res.redirect(result[0].long_link, 301);
    }
  }
}
