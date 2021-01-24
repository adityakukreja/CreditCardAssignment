import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { confirmPayment, Payment } from './payment/paymentModel';

@Injectable()
export class PseudoAppService{
    log(arg0: any) : any{
        throw new Error("Method not implemented")
    }

    base_url : string = "http://mybackend.com/api/";

    httpOptions={
        headers : new HttpHeaders({ 'Content-Type' : 'application/json' ,
    'Access-Control-Allow-Origin':'*'})
    };

    paymentService = "confirmPayment";

    constructor(private http : HttpClient){

    }

    confirmPayment(payment : Payment) : Observable<confirmPayment>{
        return this.http.post<confirmPayment>(this.base_url + this.paymentService,payment)
    }
}