import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as storeModuleConfiguration from './store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPaymentStoreEffects } from './store/effects';
import { PaymentService } from './services/payment.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserPaymentStoreModule } from './store';
import { ToasterModule, ToasterService } from 'angular2-toaster';
import { UserDetailsPaymentFacade } from './store/facade';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToasterModule,
    CommonModule,
    UserPaymentStoreModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    HttpClientModule,
    EffectsModule.forRoot(),
    StoreModule.forFeature(storeModuleConfiguration.moduleFeatureKey, storeModuleConfiguration.moduleReducers),
    EffectsModule.forFeature([UserPaymentStoreEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [PaymentService, ToasterService, UserDetailsPaymentFacade, UserPaymentStoreEffects],
  bootstrap: [AppComponent]
})

export class AppModule { }
