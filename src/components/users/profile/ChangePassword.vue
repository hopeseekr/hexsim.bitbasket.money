<template>
    <section id="change_password">
        <div class="row">
            <div class="col-xl-12">
                <div class="kt-portlet kt-portlet--height-fluid">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">Change Password<small>change or reset your account
                                password</small></h3>
                        </div>
                    </div>

                    <validation-observer @submit.prevent="changePassword" class="kt-form kt-form--label-right"
                                         ref="observer"
                                         tag="form" v-slot="{ invalid }">
                        <div class="kt-portlet__body">
                            <div class="kt-section kt-section--first">
                                <div class="kt-section__body">
                                    <div class="row">
                                        <label class="col-xl-3"></label>
                                        <div class="col-lg-9 col-xl-6">
                                            <h3 class="kt-section__title kt-section__title-sm">Change Or Recover
                                                Your
                                                Password:</h3>
                                        </div>
                                    </div>
// 8a80c3326cab012b016d72e465dd49a2
// 8a80c3326cab012b016d72e465e249a2
                                    <div class="error" v-if="error">
                                        <h4>{{ error }}</h4>
                                    </div>

                                    <div class="success" v-if="success">
                                        <h4>Successfully updated your profile.</h4>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">New Password</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <validation-provider name="password"
                                                                 rules="min:6"
                                                                 v-slot="{ errors }">
                                                <input @change="validate" class="form-control"
                                                       placeholder="New password"
                                                       type="password"
                                                       v-model="password">
                                                <span style='color:rgb(217,83,79);'>
                                                    {{ errors[0] }}
                                                </span>
                                            </validation-provider>
                                        </div>
                                    </div>
                                    <div class="form-group form-group-last row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Verify Password</label>
                                        <div class="col-lg-9 col-xl-6">
                                            <validation-provider name="confirmation"
                                                                 rules="required_if:password|confirm:password"
                                                                 v-slot="{ errors }">
                                                <input @change="validate" class="form-control"
                                                       placeholder="Verify password"
                                                       type="password"
                                                       v-model="verifyPass">
                                                <p style='color:rgb(217,83,79);'>
                                                    {{ errors[0] }}
                                                </p>
                                            </validation-provider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kt-portlet__foot">
                            <div class="kt-form__actions">
                                <div class="row">
                                    <div class="col-lg-3 col-xl-3">
                                    </div>
                                    <div class="col-lg-9 col-xl-9">
                                        <button :disabled="password === '' || invalid"
                                                class="btn btn-brand btn-bold">Change Password
                                        </button>&nbsp;
                                        <button @click="reset" class="btn btn-secondary" type="reset">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </validation-observer>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {extend} from 'vee-validate';
    import {min, required_if} from 'vee-validate/dist/rules';

    extend('required_if', {
        ...required_if,
        message: 'You must verify your new password.'
    });

    extend('min', {
        ...min,
        message: 'Your password must be at least 6 characters long.'
    });

    extend('confirm', {
        validate: (value, {other}) => value === other,
        message: 'Your passwords do not match.',
        params: [{name: 'other', isTarget: true}]
    });

    export default {
        props: {
            user: Object,
        },
        data() {
            return {
                error: null,
                success: null,

                password: '',
                verifyPass: '',
                isValid: false,
            }
        },
        computed: {},
        methods: {
            async validate() {
                this.isValid = await this.$refs.observer.validate();
            },
            reset() {
                this.password = this.verifyPass = '';
            },
            changePassword(event) {
                if (!this.isValid) {
                    event.stop();
                    return;
                }

                this.axios.put('/auth/users/' + this.user.id + '/password', {
                    password: this.password,
                    password_confirmation: this.verifyPass
                })
                    .then(response => {
                        if (!response.data.access_token) {
                            throw "Unsuccessfully updated";
                        }

                        this.$auth.login(response.data.access_token, response.data.expires_in);

                        this.success = true;
                        this.error = null;
                    })
                    .catch(error => {
                        this.success = false;
                        this.error = error;
                    });
            }
        }
    }
</script>

<style scoped>

</style>
