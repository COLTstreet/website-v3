import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, transition, animate, style } from '@angular/animations'

declare var jQuery: any;
declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('500ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-8SY773SK8B', { 'page_path': event.urlAfterRedirects });
      }      
    })
  }

  title = 'coltstreet.com';

  showAboutMe = false;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout:2500,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplaySpeed: 800,
    animateIn: true,
    animateOut: true,
    responsive: {
      0: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    }
  }

  ngOnInit() {
  }


  scrollTo(id) {
    jQuery('html, body').animate({
      scrollTop: jQuery("#" + id).offset().top
    }, 500);
  }
}
