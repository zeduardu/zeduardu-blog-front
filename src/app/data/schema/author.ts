import { Article } from "./article";
import { User } from "./user";

export interface Author {
  id: string;
  article: Article;
  user: User;
  content: string;
  commentDate: Date;
}
