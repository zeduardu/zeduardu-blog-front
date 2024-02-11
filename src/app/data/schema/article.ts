import { Author } from "./author";

export interface Article {
  id: string;
  title: string;
  content: string;
  publicationDate: string;
  author: Author;
}
