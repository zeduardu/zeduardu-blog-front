import { User } from "./user";

export interface Post {
  id: string;
  user: User
  title: string;
  summary: string
  content: string;
  publicationDate: Date;
  modificationDate: Date;
}
