import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDo } from 'src/_schemas/post.do';

export class PostsRepository {
  constructor(
    @InjectModel('Post')
    private postModel: Model<PostDo>,
  ) {}

  async insertAll(posts): Promise<any> {
    const addAllPosts = await this.postModel.insertMany(posts);
  }

  async findOne(id): Promise<any> {
    const findPostById = await this.postModel.findById(id);
    return findPostById;
  }

  async findAll(): Promise<any> {
    const findAllPosts = await this.postModel.find();
    return findAllPosts;
  }

  async deleteOne(id): Promise<any> {
    const deletePostById = await this.postModel.findByIdAndDelete(id);
    return deletePostById;
  }

  async updateOne(id, updatePostDto): Promise<any> {
    const updatePostById = await this.postModel.findByIdAndUpdate(
      id,
      updatePostDto,
    );
    return updatePostById;
  }

  async insertOne(createPostDto): Promise<any> {
    const createPost = await this.postModel.create(createPostDto);
    return createPost;
  }
}
