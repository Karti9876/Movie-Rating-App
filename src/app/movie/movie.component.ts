import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent ,NgFor , DatePipe, NgIf],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {   
  type = '';
  id = '';
  url = '';
  text :any
  movies:any
  movie :any
  review : any;
  constructor(private route : ActivatedRoute , private http : HttpClient){}
  ngOnInit(){
    this.type = this.route.snapshot.params['type'];
    this.id = this.route.snapshot.params['id'];

    if(this.type === 'trending'){
      this.url = 'http://localhost:4200/assets/data/trending-movies.json';
    }
    if(this.type === 'threatre'){
      this.url = 'http://localhost:4200/assets/data/threatre-movies.json';
    }
    if(this.type === 'popular'){
      this.url = 'http://localhost:4200/assets/data/popular-movies.json';
    }
    this.getMovies()
  }
  getMovies(){
    this.http.get(this.url).subscribe((movies) =>{
      this.movies = movies;
      let index = this.movies.findIndex(
        (movie : {id:string}) => movie.id == this.id
      )
      if(index >-1){
        this.movie = this.movies[index]
      }
    })
  }
  submit(){
    alert("Saved");
  }

  
  
}
