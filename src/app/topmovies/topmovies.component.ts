import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-topmovies',
  templateUrl: './topmovies.component.html',
  styleUrls: ['./topmovies.component.css']
})
export class TopmoviesComponent implements OnInit {
  const list: any = {
    movies: null
  }

  constructor(
    private moviesService: MoviesService
  ){}

  ngOnInit() {
    this.getMoviesList();
  }

  getMoviesList(): void {  
    this.moviesService.getApi()
      .subscribe(
        response => ( this.list = response['movies'] ),
        error => (console.log('error: ', error))
      );
  }   

}