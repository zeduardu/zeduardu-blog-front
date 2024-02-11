import { Article } from "./article";
import { User } from "./user";

export interface Comment {
  id: string;
  article: Article;
  user: User;
  content: string;
  commentDate: Date;
}
