import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn : 'root',
})

export class FakeBackendService implements InMemoryDbService {

    createDb(){
        const payment = {
            status : "Payment done successfully"
        }

        return{
            payment
        }
    }

}