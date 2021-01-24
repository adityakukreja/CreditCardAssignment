import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { NavigateComponent } from './navigate/navigate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PseudoAppService } from './pseudo-app.service';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './fake-backend.service';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { paymentFeatureKey,reducer } from './payment/store/reducer/payment.reducer';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    NavigateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature(paymentFeatureKey,reducer),
    InMemoryWebApiModule.forRoot(FakeBackendService,{
      passThruUnknownUrl : true
    }),
    StoreModule.forRoot(reducer, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [PseudoAppService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
