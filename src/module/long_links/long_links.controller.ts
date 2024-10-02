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
import { Request, Response } from 'express';
// import { LongLinkDto } from './dto/long_link.dto';

@Controller()
export class LinkShortenerController {
  constructor(private readonly longlinkService: longLinkService) {}

  @Post('shorturl')
  @UseInterceptors(NoFilesInterceptor())
  async linkShortener(@Req() req: Request) {
    const longLink = req.body.longURL;
    const isValidURL =
      /[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gi.test(
        longLink,
      );
    if (isValidURL) {
      const id = generateUniqueIDforShortURL();

      const shortUrl = `${process.env.ORIGIN_URL}/${id}`;

      const linkData = {
        long_link: longLink,
        short_link: shortUrl,
        short_link_id: id,
      };

      const result = await this.longlinkService.create(linkData);
      return result['short_link'];
    } else {
      let msg: string;
      if (longLink === '') {
        msg = 'URL Required!!!';
      } else {
        msg = 'Invalid URL!!!';
      }
      return msg;
    }
  }

  @Get(':id')
  async getLongLink(@Req() req: Request, @Res() res: Response) {
    const id = req.params.id;

    const result = await this.longlinkService.findById(id);

    if (result[0]) {
      res.redirect(301, result[0].long_link);
    }
  }
}
