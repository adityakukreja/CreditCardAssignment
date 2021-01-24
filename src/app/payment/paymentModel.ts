export class Payment{

    cardNumber : string;
    cardHolder : string;
    expiryDate : string;
    cvv : string;
    amount : number;
}

export class confirmPayment {
    status : string = "Payment done successfully";
}