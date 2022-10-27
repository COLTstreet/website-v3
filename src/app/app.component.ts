import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { trigger, transition, animate, style } from '@angular/animations'

declare var jQuery: any;

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
