import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private http : HttpClient , private router : Router){}
  ngOnInit(){
    this.getTrendingMovies();
    this.getTreatreMovies();
    this.getPopularMovies();
  }
  trendingMovies : any
  threatreMovies : any
  popularMovies:any
  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=>{
      this.trendingMovies = movies;
      console.log(this.trendingMovies)
    })
  }
  getTreatreMovies(){
    this.http.get('http://localhost:4200/assets/data/threatre-movies.json').subscribe((movies)=>{
      this.threatreMovies = movies;
      console.log(this.threatreMovies)
    })
  }
  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies)=>{
      this.popularMovies = movies;
      console.log(this.popularMovies)
    })

  }
  gotoMovies(type : string , id : string){
    this.router.navigate(['movie' , type , id])
  }

}
