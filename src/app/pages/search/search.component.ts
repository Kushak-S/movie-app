import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

// testing-------------------------------------------------------------------
import { ActivatedRoute } from '@angular/router';
// testing-------------------------------------------------------------------

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  movieName:any;
  searchResult:any;
  constructor(private service:MovieApiServiceService, private route:ActivatedRoute) {
  }
  
  // testing-------------------------------------------------------------------
  ngOnInit(): void{
    this.route.paramMap.subscribe((params)=>{
      this.movieName = params.get('query');
      this.fetchData();
    });
  }
  // testing-------------------------------------------------------------------

  fetchData(){
    this.service.getSearchMovie({movieName:this.movieName}).subscribe(async (res)=>{
      this.searchResult = await res.results;
      console.log(this.searchResult);
    });
  }

}
