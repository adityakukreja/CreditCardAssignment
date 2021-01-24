import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PseudoAppService } from '../pseudo-app.service';
import { Payment } from './paymentModel';
import { loadPayments } from './store/action/payment.actions';
import { State } from './store/reducer/payment.reducer';
import { selectPayment } from './store/selector/payment.selectors';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cardHolder: string;
  securitypin : string;
  expiryDate : string;
  amount : number;
  cardNumber : string;
  count : number = 0;
  pay$: Observable<Payment[]>;
  storeData : Payment[]=[];
  cardData : boolean = false;

  constructor(private appService : PseudoAppService,private datePipe : DatePipe,private store: Store<State>) {
    
   } 

  ngOnInit(): void {
  }

  completePayment(){

    var today = new Date();
    var todayDate;
    todayDate = this.datePipe.transform(today,'MM/yy')

    if(this.expiryDate.split('/')[0] < todayDate.split('/')[0] || this.expiryDate.split('/')[1] <= todayDate.split('/')[1]){
    
        window.alert("Please Enter Future Date")

        return
      
    }
 
    const payment = new Payment();

    payment.cardHolder=this.cardHolder;
    payment.cardNumber=this.cardNumber;
    payment.cvv=this.securitypin;
    payment.expiryDate=this.expiryDate;
    payment.amount=this.amount;

    
    this.store.dispatch(loadPayments(payment));
    // this.store.select(state => state).subscribe(data => this.pay$ = data)
    this.pay$ = this.store.pipe(select(selectPayment));
    this.cardData = true;
    
    this.appService.confirmPayment(payment).subscribe(
      (res) => {
        window.alert("Successfully Submitted");
        
      },
      error =>{
        window.alert("Successfully Submitted");
        this.cardHolder="";
        this.cardNumber="";
        this.amount=null;
        this.expiryDate="";
        this.securitypin="";
      }
    )
  }

  addDateFormat(){
    if(this.expiryDate.length<2){
      this.count=0;
    }
    if(this.count==0){
      if(this.expiryDate.length==2){
        this.count=1;
        this.expiryDate=this.expiryDate  + "/";
      }
    }
   
  }

}
