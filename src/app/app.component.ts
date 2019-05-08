import {
  Component,
  OnInit
} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'website-v3';

  ngOnInit() {
    var root = document.getElementById('portrait');

    var mouse_monitor = function (e) {
      let x = e.clientX / innerWidth;
      let y = e.clientY / innerHeight;

      let move_x = (x > 0.5) ? '-30px' : '30px';
      let move_y = (y > 0.5) ? '-20px' : '20px';

      root.style.setProperty("--translate-x", move_x);
      root.style.setProperty("--translate-y", move_y);
    }

    root.addEventListener("mousemove", mouse_monitor);
  }


  scrollTo(id) {
    jQuery('html, body').animate({
      scrollTop: jQuery("#" + id).offset().top
    }, 500);
  }
}
