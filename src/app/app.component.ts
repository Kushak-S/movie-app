import { Component, OnInit, HostListener } from '@angular/core';
// testing-------------------------------------------------------------------
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
// testing-------------------------------------------------------------------

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'movie';

  // handle scroll-------------------------------------------------------------------
  navbg:any;
  @HostListener('document:scroll')scrollover(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.navbg = {'background-color':'rgba(0, 0, 0, 0.5)'}
    }else{
      this.navbg = {}
    }
  }
  // handle scroll-------------------------------------------------------------------



  // handle search-------------------------------------------------------------------
  ngOnInit(): void {
  }
  constructor(private route:Router) { }
  
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm(){
    this.route.navigate(['/search',this.searchForm.value.movieName]);
  }
  // handle search-------------------------------------------------------------------

}
