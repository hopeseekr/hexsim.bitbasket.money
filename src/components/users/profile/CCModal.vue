<template>
    <!--begin:: Modal Edit/Add Card -->
    <!--        <transition></transition>-->
    <div aria-hidden="true" aria-labelledby="exampleModalLabel" id="add_credit_card">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Billing
                        Information:</h5>
                    <button aria-label="Close" class="close" type="button">
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="kt-section">
                            <div class="kt-section__content">
                                <div class="form-group row">
                                    <div class="col-lg-12">
                                        <label class="form-control-label">*
                                            Cardholder Name:</label>
                                        <input class="form-control" name="billing_card_name" type="text"
                                               v-model="card.cardHolderName">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-12">
                                        <label class="form-control-label">* Card
                                            Number:</label>
                                        <input :maxlength="cardType.lengths[0]" @change="getCardType(card.creditCardNumber)"
                                               class="form-control"
                                               name="billing_card_number"
                                               placeholder=""
                                               type="tel"
                                               v-model="card.creditCardNumber">
                                    </div>
                                </div>
                                <div class="form-group form-group-last row">
                                    <div class="col-lg-4 form-group-sub">
                                        <label class="form-control-label">* Exp
                                            Month:</label>
                                        <select class="form-control"
                                                name="billing_card_exp_month"
                                                v-model="card.expirationMonth">
                                            <option value="">Select</option>
                                            <option v-bind:value="String(i)" v-for="i in 12">{{ i }}</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 form-group-sub">
                                        <label class="form-control-label">* Exp
                                            Year:</label>
                                        <select class="form-control"
                                                name="billing_card_exp_year"
                                                v-model="card.expirationYear">
                                            <option value="">Select</option>
                                            <option v-bind:value="String(currentYear + i)"
                                                    v-for="i in 5">{{ currentYear + i }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 form-group-sub">
                                        <label class="form-control-label">*
                                            {{cardType.code.name}}:</label>
                                        <input :maxlength="cardType.code.size"
                                               :size="cardType.code.size"
                                               class="form-control"
                                               name="billing_card_cvv" placeholder="" type="text"
                                               v-model="card.cvv">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-section">
                            <h3 class="kt-section__title">
                                Billing Address
                                <i class="kt-section__help" title="If different than the corresponding address"></i>
                            </h3>
                            <div class="kt-section__content">
                                <div class="form-group row">
                                    <div class="col-lg-12">
                                        <label class="form-control-label">*
                                            Address 1:</label>
                                        <input class="form-control" name="billing_address_1" type="text"
                                               v-model="address1">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-12">
                                        <label class="form-control-label">Address
                                            2:</label>
                                        <input class="form-control" name="billing_address_2" type="text"
                                               v-model="address2">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-lg-5 form-group-sub">
                                        <label class="form-control-label">*
                                            City:</label>
                                        <input class="form-control" name="billing_city" type="text" v-model="city">
                                    </div>
                                    <div class="col-lg-5 form-group-sub">
                                        <label class="form-control-label">*
                                            State:</label>
                                        <input class="form-control" name="billing_state" type="text" v-model="state">
                                    </div>
                                    <div class="col-lg-2 form-group-sub">
                                        <label class="form-control-label">*
                                            ZIP:</label>
                                        <input class="form-control" maxlength="5" name="billing_zip" type="text"
                                               v-model="zip">
                                    </div>
                                </div>

                                <div class="form-group form-group-last row">
                                    <div class="col-lg-12">
                                        <label class="kt-checkbox">
                                            <input name="checkbox"
                                                   type="checkbox" v-model="card.defaultPaymentMethod"> Set as
                                            Default Payment
                                            <span></span>
                                        </label>
                                        <p style='color:rgb(217,83,79);'>{{ error }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button @click="close"
                            class="btn btn-secondary"
                            type="button">Close
                    </button>
                    <button @click="addCard" class="btn btn-primary" type="button">Add</button>
                </div>
            </div>
        </div>
    </div>
    <!--end:: Modal Edit/Add Card -->
</template>

<script>
    import CreditCardType from "credit-card-type";

    export default {
        name: "CCModal",
        props: {
            user: Object
        },
        data() {
            return {
                currentYear: new Date().getFullYear(),
                cardType: {
                    niceType: 'Unknown',
                    type: 'unknown',
                    gaps: [4, 8, 12],
                    lengths: [16],
                    code: {name: 'CVV', size: 3}
                },
                card: {
                    cardHolderName: this.user.firstName + " " + this.user.lastName,
                    defaultPaymentMethod: false,
                    creditCardType: 'Unknown',
                    creditCardNumber: '',
                    cvv: '',
                    expirationMonth: '',
                    expirationYear: ''
                },
                address1: this.user.address1,
                address2: this.user.address2,
                zip: this.user.zip,
                city: this.user.city,
                state: this.user.state,
                error: ''
            }
        },
        computed: {
            cardHolderName: function () {
                if (!this.card || !this.user || !this.user.firstName) {
                    return "Guest";
                }

                this.card.cardHolderName = this.user.firstName + " " + this.user.lastName;

                return this.card.cardHolderName;
            }
        },
        methods: {
            close: function () {
                this.$emit('close');
            },
            getCardType: function (cardNumber) {
                // @FIXME: We need to convert `card` to a two-way model.
                this.$parent.$emit('beganAddingCard');
                this.cardType = CreditCardType(cardNumber)[0] || this.cardType;
                let type = (type) => {
                    switch (type) {
                        case "Mastercard":
                            return "MasterCard";
                        case "American Express":
                            return "AmericanExpress";
                        case "Diners Club":
                            return "Diners";
                        default:
                            return type;
                    }
                };
                this.card.creditCardType = type(this.cardType.niceType);
            },
            addCard: function () {
                if (!this.card || !this.card.creditCardNumber) {
                    this.error = 'Please fill in the credit card information.';
                    return;
                }

                this.axios.post("/users/" + this.user.id + "/creditCards", this.card)
                    .then(response => {
                        this.card.id = response.data.paymentMethodId;

                        this.$parent.$emit('cardAdded', this.card);
                        this.close();
                    })
                    .catch(error => {
                        console.warn(error);
                        this.error = "Something went wrong. Please try again later.";
                        if (error && error.response && error.response.status === 400) {
                            this.error = "Please check your information and try again.";
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>
