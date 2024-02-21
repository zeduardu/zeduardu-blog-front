import {Component, OnInit} from '@angular/core';
import {Post} from "../../../data/schema/post";
import {PostService} from "../../../data/services/post.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  private posts: Post[] | undefined;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe((data: Post[]) => this.posts = { ...data });
    console.log(this.posts);
  }

  categories: string[] = [
    "Technology",
    "Health",
    "Science",
    "Business",
    "Sports",
    "Fashion",
    "Food",
    "Travel",
    "Art",
    "Music"
  ];
}
