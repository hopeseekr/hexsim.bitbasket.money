<template>
    <section id="invoices">
        <div class="row">
            <div class="col-xl-12">
                <div class="kt-portlet kt-portlet--height-fluid">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">Invoices <small>Includes documents such as Statements,
                                Refund Letters, etc.</small></h3>
                        </div>
                    </div>
                    <div class="kt-portlet__body">
                        <div class="kt-section kt-section--first">
                            <div class="kt-section__body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <table class="table table-striped">
                                            <thead class="thead-dark">
                                            <tr>
                                                <th v-for="col in columns" :key="col">{{ col }}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="row in invoices">
                                                <td>{{ row.number }}</td>
                                                <td>{{ row.status }}</td>
                                                <td style="white-space: nowrap">{{ row.invoiceDate }}</td>
                                                <td style="white-space: nowrap">{{ row.renewDate }}</td>
                                                <td>${{ row.amount }}</td>
                                                <td>
                                                    <button
                                                        @click="viewInvoice(row.id)"
                                                        class="btn btn-bold btn-label-brand btn-sm"
                                                    >
                                                        VIEW
                                                    </button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="kt-portlet__foot">
                        <div class="kt-form__actions">
                            <div class="row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {InvoiceRepo} from '../../../repositories/InvoiceRepo';
    import {base64StringToBlob} from 'blob-util';

    export default {
        name: "Invoices",
        props: {
            user: Object,
        },
        data: () => ({
            invoiceRepo: Object,
            columns: [
                "Invoice #",
                "Status",
                "Posted Date",
                "Renew Date",
                "Amount",
                ""
            ],
            invoices: [],
        }),
        mounted() {
            this.invoiceRepo = new InvoiceRepo(this.axios, this.user.id);
            this.fetchInvoicesSummary();
        },
        watch: {
            user: function () {
                this.invoiceRepo = new InvoiceRepo(this.axios);
                this.fetchInvoicesSummary();
            }
        },
        methods: {
            fetchInvoicesSummary: function () {
                this.invoiceRepo.fetchSummary(this.user.id)
                    .then(invoices => {
                        this.invoices = invoices;
                    })
                    .catch(error => { alert(error); });
            },
            viewInvoice: function (invoiceId) {
                // Taken from https://stackoverflow.com/a/54014653/430062
                const downloadURI = function (url, name) {
                    const link = document.createElement('a');
                    link.download = name;
                    link.href = url;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                };

                this.invoiceRepo.fetch(invoiceId)
                    .then(invoice => {
                        // Taken from https://stackoverflow.com/a/51877818/430062
                        const pdfBlob = base64StringToBlob(invoice.Body, 'application/pdf');

                        const invoiceURI = window.URL.createObjectURL(pdfBlob);
                        downloadURI(invoiceURI, 'invoice-' + invoice.InvoiceNumber + '.pdf');
                    });
            }
        }
    }
</script>

<style scoped>

</style>
