import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor() { }

  ngOnInit() {
    $(document).ready(function()
    { 
  $(".dropdown").on("click",function()
  {
    console.log("hello");
    $(".dropdown").removeClass("active");
    $(this).addClass("active");
    $($(this).find("ul")).slideToggle(500);
  })
    })
  }

}
