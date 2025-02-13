import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts: any[] = [];
  inputValue: number = 1;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPostsDefault().subscribe(data => {
      this.posts = data;
    });
  }

  fetchData(){
    console.log(this.inputValue);
    this.apiService.getPosts(this.inputValue).subscribe(data => {
      this.posts = data;
    });
  }
}
