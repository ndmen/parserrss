import { Injectable } from '@nestjs/common';
import Parser from 'rss-parser';

@Injectable()
export class ParserService {
  async findAll() {
    const parser = new Parser();
    const feed = await parser.parseURL('https://lifehacker.com/rss');
    console.log(feed.title);

    feed.items.forEach((item) => {
      console.log(item.title + ':' + item.link);
    });
  }
}
