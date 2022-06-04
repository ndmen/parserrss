import { Injectable } from '@nestjs/common';
import Parser from 'rss-parser';
import { PostsRepository } from './posts.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async findAll() {
    const parser = new Parser();
    const feed = await parser.parseURL('https://lifehacker.com/rss');

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

    const addPosts = await this.postsRepository.findAll(posts);
    return posts;
  }

  async create(createPostDto: CreatePostDto) {
    const createPost = await this.postsRepository.insertOne(createPostDto);
    return createPost;
  }

  // findAll() {
  //   return `This action returns all posts`;
  // }

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
