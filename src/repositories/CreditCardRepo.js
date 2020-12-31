"use strict";

export class CreditCardRepo
{
    axios = null;
    user_id = null;
    cards = null;

    constructor(axios, user_id) {
        this.axios = axios;
        this.user_id = user_id;
    }

    get() {
        return this.cards;
    }

    fetchInfo() {
        return new Promise((resolve, reject) => {
        this.axios.get('/users/' + this.user_id + '/creditCards')
            .then(response => {
                this.cards = response.data.creditCards;
                resolve(this.cards);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}
