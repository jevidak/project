import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToAbout() {
    this.router.navigateByUrl('/about');
  }

  goToCourses() {
    this.router.navigateByUrl('/course-details');
  }

  goToEvents() {
    this.router.navigateByUrl('/events');
  }

  goToContact() {
    this.router.navigateByUrl('/contact');
  }

  goToPricing() {
    this.router.navigateByUrl('/pricing');
  }

  goToTrainers() {
    this.router.navigateByUrl('/trainers');
  }
}
