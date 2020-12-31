"use strict";

export class InvoiceRepo
{
    axios = null;
    invoices = {};

    constructor(axios) {
        this.axios = axios;
    }

    get(invoiceId) {
        return this.invoices[invoiceId];
    }

    all() {
        return this.invoices;
    }

    fetch(invoiceId) {
        return new Promise((resolve, reject) => {
        this.axios.get('/invoices/' + invoiceId)
            .then(response => {
                this.invoices[invoiceId] = response.data;
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    fetchSummary(userId) {
        return new Promise((resolve, reject) => {
            this.axios.get('/users/' + userId + '/invoices')
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
        });
    }
}
