import { Component, OnInit } from '@angular/core';
import {  } from 'gsap';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor() { }
  titre = gsap.timeline;

  ngOnInit(): void {
    gsap.from('.textAnimated span',{  
      duration:1, 
      opacity:0.2,
      stagger:0.05,
      filter: 'blur(10px)'
    });
    gsap.from('.trait', { 
        width: 0
    });
    gsap.from('.imgGalery', { 
      y:100,
      stagger: 0.05,  
    } ); 
  };
}
