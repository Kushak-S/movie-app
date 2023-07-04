import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private service:MovieApiServiceService, private router:ActivatedRoute) { }

  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;

  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId);
    this.getMovie(getParamId);
    this.getVideo(getParamId);
    this.getCast(getParamId);
  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((res)=>{
      console.log(res, "movie details");
      this.getMovieDetailResult = res;
    });
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe(async (res)=>{
      await res.results.forEach((element:any) => {
        if(element.type == "Trailer" && element.official == true){
          this.getMovieVideoResult = element.key;
        }
      });
    });
  }

  getCast(id:any){
    this.service.getMovieCast(id).subscribe(async (res)=>{
      this.getMovieCastResult = await res.cast;
    });
  }
}
