import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ versionKey: false, timestamps: true })
export class Post {
  @Prop()
  title: string;

  @Prop()
  link: string;

  @Prop()
  description: string;

  @Prop()
  guid: string;

  @Prop()
  creator: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
