import { Types } from 'mongoose';

export class PostDo {
  _id: Types.ObjectId;
  title: string;
  link: string;
  description: string;
  guid: string;
  creator: Date;

  constructor(props: Partial<PostDo>) {
    this._id = props._id;
    this.title = props.title || null;
    this.link = props.link || null;
    this.description = props.description || null;
    this.guid = props.guid || null;
    this.creator = props.creator || null;
  }
}
