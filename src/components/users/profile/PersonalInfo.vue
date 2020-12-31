<template>
    <section id="personal_info">
        <div class="row">
            <div class="col-xl-12">
                <div class="kt-portlet">
                    <div class="kt-portlet__head">
                        <div class="kt-portlet__head-label">
                            <h3 class="kt-portlet__head-title">Personal Information <small>update your
                                personal information</small></h3>
                        </div>
                    </div>

                    <div class="error" v-if="error">
                        <h4>{{ error }}</h4>
                    </div>

                    <div class="success" v-if="success">
                        <h4>Successfully updated your profile.</h4>
                    </div>

                    <div class="content">
                        <form @submit.prevent="editProfile" class="kt-form kt-form--label-right">
                            <div class="kt-portlet__body">
                                <div class="kt-section kt-section--first">
                                    <div class="kt-section__body">
                                        <div class="row">
                                            <label class="col-xl-3"></label>
                                            <div class="col-lg-9 col-xl-6">
                                                <h3 class="kt-section__title kt-section__title-sm">Customer
                                                    Info:</h3>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Prefix</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <!-- @FIXME: v-model is not working with prefixes -->
                                                <select
                                                        :value="user.prefix"
                                                        @input="$set(user.prefix, index, $event.target.value)"
                                                        class="form-control kt-selectpicker"
                                                        data-width="100px"
                                                >
                                                    <option></option>
                                                    <option>Dr</option>
                                                    <option>Mr</option>
                                                    <option>Mrs</option>
                                                    <option>Ms</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-xl-3 col-lg-3 col-form-label">First
                                                Name</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <input class="form-control" type="text"
                                                       v-model="user.firstName"/>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Last
                                                Name</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <input class="form-control" type="text"
                                                       v-model="user.lastName"/>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <!-- @FIXME: v-model is not working with suffixes -->
                                            <label class="col-xl-3 col-lg-3 col-form-label">Suffix</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <select
                                                        class="form-control kt-selectpicker"
                                                        data-width="100px"
                                                        v-model="user.suffix"
                                                >
                                                    <option></option>
                                                    <option>II</option>
                                                    <option>III</option>
                                                    <option>IV</option>
                                                    <option>Jr</option>
                                                    <option>Sr</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <label class="col-xl-3"></label>
                                            <div class="col-lg-9 col-xl-6">
                                                <h3 class="kt-section__title kt-section__title-sm">Contact
                                                    Info:</h3>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Home
                                                Phone</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend"><span
                                                            class="input-group-text"><i
                                                            class="la la-phone"></i></span></div>
                                                    <input class="form-control" placeholder="Home Phone"
                                                           type="tel"
                                                           v-model="user.phone.home">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Cell
                                                Phone</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend"><span
                                                            class="input-group-text"><i
                                                            class="la la-phone"></i></span></div>
                                                    <input class="form-control" placeholder="Cell Phone"
                                                           type="tel"
                                                           v-model="user.phone.cell"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Work
                                                Phone</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend"><span
                                                            class="input-group-text"><i
                                                            class="la la-phone"></i></span></div>
                                                    <input class="form-control" placeholder="Work Phone"
                                                           type="tel"
                                                           v-model="user.phone.work">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-xl-3 col-lg-3 col-form-label">Email
                                                Address</label>
                                            <div class="col-lg-9 col-xl-6">
                                                <div class="input-group">
                                                    <div class="input-group-prepend"><span
                                                            class="input-group-text"><i
                                                            class="la la-at"></i></span></div>
                                                    <input class="form-control" placeholder="Email"
                                                           type="email" v-model="user.email"/>
                                                </div>
                                                <span class="form-text text-muted">We'll never share your email with anyone else.</span>
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
                                            <button class="btn btn-brand btn-bold">Submit</button>&nbsp;
                                            <button class="btn btn-secondary" type="reset">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            user: Object
        },
        data() {
            return {
                error: null,
                success: null
            };
        },
        methods: {
            editProfile: function () {
                this.axios.put('/users/' + this.user.id, this.user)
                    .then(response => {
                        if (!response.data.success) {
                            throw "Unsuccessfully updated";
                        }

                        // Store the updated user info.
                        localStorage.setItem('user', JSON.stringify(this.user));

                        this.error = null;
                        this.success = true;
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
