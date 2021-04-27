import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster';
import { Observable } from 'rxjs';
import {  UserDetailsPaymentFacade } from './store/facade';
import { UserDetails} from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Credit Card Model';
  toasterConfig: ToasterConfig;
  userDetails$: Observable<UserDetails>;

  constructor(private router: Router, private  userDetailsPayment: UserDetailsPaymentFacade) {

    this.toasterConfig = new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      positionClass: 'toast-top-full-width',
      timeout: 3000
    });
    this. userDetails$ = this. userDetailsPayment.data$;
  }

  ngOnInit(): void {
    this. userDetails$.subscribe(data => {
    });
  }


  navigate(): void{
    this.router.navigate(['/payment']);
  }

}
