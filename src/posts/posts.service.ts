import { Injectable } from '@nestjs/common';
import Parser from 'rss-parser';
import { PostsRepository } from './posts.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  @Cron('45 * * * * *')
  async handleCron() {
    const addCronTask = await this.parseAll();
    console.log('Called when the current second is 45');
  }

  async parseAll() {
    const parser = new Parser();
    const feed = await parser.parseURL(`${process.env.PRPARSEURL}`);

    const posts = [];

    feed.items.forEach((item) => {
      const getPosts =
        '{ ' +
        '"title": "' +
        item.title +
        '", ' +
        '"link": "' +
        item.link +
        '", ' +
        '"description": "' +
        item.description +
        '", ' +
        '"guid": "' +
        item.guid +
        '", ' +
        '"creator": "' +
        item.creator +
        '" }';

      const parsedPosts = JSON.parse(getPosts);
      posts.push(parsedPosts);
    });

    const addPosts = await this.postsRepository.insertAll(posts);
    return posts;
  }

  async create(createPostDto: CreatePostDto) {
    const createPost = await this.postsRepository.insertOne(createPostDto);
    return createPost;
  }

  async findAll() {
    const getAllPosts = await this.postsRepository.findAll();
    return getAllPosts;
  }

  async findOne(id: string) {
    const getPostById = await this.postsRepository.findOne(id);
    return getPostById;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const updatePostById = await this.postsRepository.updateOne(
      id,
      updatePostDto,
    );
    return updatePostById;
  }

  async remove(id: string) {
    const getPostById = await this.postsRepository.deleteOne(id);
    return getPostById;
  }
}
