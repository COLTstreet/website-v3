import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  websiteTiles = [
    {
      title: "NatriumEFCU.com",
      description: "An informational website for the Natrium Employees Federal Credit Union",
      code: "Angular  HTML  CSS",
      link: "https://natriumefcu.com/home",
      github: null
    },
    {
      title: "Hoopfire",
      description: "A NBA/NCAA basketball game predictor that provides the score, spread, confidence, and other information about any custom matchup",
      code: "Angular Typescript Firebase",
      link: "https://hoopfire-api.web.app/",
      github: "https://github.com/COLTstreet/Hoopfire-PWA"
    },
    {
      title: "Responsive NCAA Bracket",
      description: "A codepen for a completely responsive 64 team march madness style tournament bracket",
      code: "HTML  CSS",
      link: "https://codepen.io/COLTstreet/pen/JxrPba",
      github: null
    },
    {
      title: "caroleandcolt.com",
      description: "A wedding/lifestyle website for my wife and me to share news, photos, and updates to our friends and family",
      code: "Angular Typescript  CSS",
      link: "https://caroleandcolt.com/home",
      github: null
    }
  ]

  miscTiles = [
    {
      title: "Web Scraper",
      description: "A web scraping tool that runs as a Google Cloud Function every night and gets statistical information needed for Hoopfire and saves it into a Firestore DB",
      code: "Javascript Cheerio Firebase",
      link: null,
      github: "https://github.com/COLTstreet/scrape"
    }
  ]

}
