<template>
    <section id="billing_account">
        <div class="row">
            <div class="col-xl-12">
                <div class="kt-portlet kt-portlet--height-fluid">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">Billing Information<small>change or reset your account
                                password</small></h3>
                        </div>
                    </div>
                    <div class="kt-portlet__body">
                        <div class="kt-section kt-section--first">
                            <div class="kt-section__body">
                                <p>To update an expiration date or your security code for an existing card, please
                                    use the "Edit This Card" feature.</p>
                                <p>To add a new card to your account, please use the "Add New Card" feature. If you
                                    wish to make this your default card, please check "Set as Default".</p>
                                <p>After updating or adding your new card, please <b>"Refresh the Page"</b>.</p>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="alert alert-success" role="alert">
                                            <div class="alert-text">You have successfully set your credit card as
                                                default.
                                            </div>
                                            <div class="alert-close">
                                                <button aria-label="Close" class="close" data-dismiss="alert"
                                                        type="button">
                                                    <span aria-hidden="true"><i class="la la-close"></i></span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped"
                                                   v-on:beganAddingCard="onAddingCard"
                                                   v-on:cardAdded="onCardAdded"
                                            >
                                                <thead>
                                                <tr>
                                                    <th colspan="4">Credit Cards</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="card in creditCards">
                                                    <td class="kt-font-brand kt-font-bold">
                                                        {{card.cardType}} Ending in: {{card.cardNumber.slice(-4)}}
                                                    </td>
                                                    <td class="kt-font-brand kt-font-bold">
                                                        Expiration: {{card.expirationMonth + '/' + card.expirationYear}}
                                                    </td>
                                                    <td>
                                                        <button :disabled="card.defaultPaymentMethod"
                                                                class="btn btn-bold btn-label-brand btn-sm">
                                                            <span v-if="card.defaultPaymentMethod">Default</span>
                                                            <span v-if="!card.defaultPaymentMethod">Set As Default</span>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button v-if="!card.defaultPaymentMethod"
                                                                @click="deleteCard(card.id)"
                                                                class="btn btn-bold btn-label-brand btn-sm">
                                                            Delete This Card
                                                        </button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="kt-widget11__action kt-align-right">
                                            <button @click="addCard"
                                                    class="btn btn-label-brand btn-bold btn-sm btn-wide" type="button">
                                                Add A New Card
                                            </button>
                                        </div>
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
    import CCModal from "./CCModal";
    import {CreditCardRepo} from '@/repositories/CreditCardRepo';

    export default {
        props: {
            user: Object,
        },
        data() {
            return {
                creditCards: [],
                beganAddingCard: false,
                //TODO: Added the alert components for success and failures.
                success: false,
                failure: false
            }
        },
        mounted() {
            this.fetchCreditCards();
        },
        watch: {
            user: function () {
                this.fetchCreditCards();
            }
        },
        methods: {
            onAddingCard: function () {
                this.beganAddingCard = true;
            },
            onCardAdded: function (creditCardInfo) {
                console.log([this.creditCards, creditCardInfo]);

                this.beganAddingCard = false;

                const creditCard = {
                    id: creditCardInfo.id,
                    cardHolderInfo: {
                        cardHolderName: creditCardInfo.cardHolderName,
                        addressLine1: null,
                        addressLine2: null,
                        city: null,
                        state: null,
                        zipcode: null
                    },
                    cardNumber: creditCardInfo.creditCardNumber,
                    cardType: creditCardInfo.creditCardType,
                    defaultPaymentMethod: creditCardInfo.defaultPaymentMethod,
                    expirationMonth: creditCardInfo.expirationMonth,
                    expirationYear: creditCardInfo.expirationYear
                };

                this.creditCards.unshift(creditCard);
            },
            fetchCreditCards: function () {
                const ccRepo = new CreditCardRepo(this.axios, this.user.id);
                ccRepo.fetchInfo()
                    .then(creditCards => {
                        console.log(creditCards);
                        this.creditCards = creditCards;
                    })
                    .catch(error => {
                        console.warn(error);
                        this.error = error;
                    })
                    .finally(() => this.loading = false);
            },
            addCard: function () {
                let _this = this;
                this.$modal.show(
                    CCModal,
                    {
                        user: this.user
                    },
                    {
                        name: 'add-card',
                        adaptive: true,
                        height: 'auto',
                        width: '45%',
                        scrollable: true,
                        beganAddingCard: false
                    },
                    {
                        'before-close': _this.beforeClose,
                        'beganAddingCard': function (event) {
                            _this.onAddingCard(event);
                        },
                        'cardAdded': function (creditCard) {
                            _this.onCardAdded(creditCard);
                        }
                    }
                );
            },
            beforeClose(event) {
                if (this.beganAddingCard === true) {
                    if (confirm('Do you really want to close this form?') === false) {
                        event.stop();
                    }
                }
            },
            deleteCard: function (id) {
                console.log(id);
                this.axios.delete("/users/" + this.user.id + "/creditCards/" + id)
                    .then(response => {
                        console.log(response);
                        this.creditCards.splice(id, 1);
                        this.fetchCreditCards();
                    })
                    .catch(error => {
                        console.warn(error)
                    });
            }
        }
    }
</script>

<style scoped>

</style>
