import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private service:MovieApiServiceService) { }

  bannerResult:any=[];

  ngOnInit(): void {
    this.bannerData();
  }

  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe(async (res)=>{
      this.bannerResult = await res.results;
    });
  }

}
