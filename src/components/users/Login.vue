<template>
    <section id="loginBox">
        <div class="login-error alert alert-error" role="alert" v-if="loginError.length > 0">
            <h2>There was a problem</h2>
            {{ loginError }}
        </div>

        <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Log in</h3>
                        <div class="d-flex justify-content-end social_icon">
                            <span><i class="fab fa-facebook-square"></i></span>
                            <span><i class="fab fa-google-plus-square"></i></span>
                            <span><i class="fab fa-twitter-square"></i></span>
                        </div>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" class="form-control" placeholder="username">

                            </div>
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" class="form-control" placeholder="password">
                            </div>
                            <div class="row align-items-center remember">
                                <input type="checkbox"/>&nbsp; Remember me
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Login" class="btn float-right login_btn">
                            </div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-center links">
                            Don't have an account? <router-link to="/register">Register</router-link>
                        </div>
                        <div class="d-flex justify-content-center">
                            <router-link to="/reset-password" id="kt_login_forgot">Forget Password ?</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
                loginError: ""
            }
        },
        methods: {
            login(e) {
                e.preventDefault();

                if (this.email.length > 0 && this.password.length > 0) {
                    this.axios.post('/auth/users/login', {
                        username: this.email,
                        password: this.password
                    })
                    .then(response => {
                        const decodedToken = this.$auth.login(response.data.access_token, response.data.expires_in);
                        if (!decodedToken) {
                            throw 'Unknown login error';
                        }

                        // Store the user's keys.
                        this.axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('jwt');
                        localStorage.setItem('user:id', decodedToken.user_id);
                        this.$emit('loggedIn');

                        if (this.$route.params.nextUrl) {
                            this.$router.push(this.$route.params.nextUrl);
                        } else {
                            this.$router.push('/');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        localStorage.removeItem('jwt');
                        if (error.response && error.response.status === 401) {
                            this.loginError = "Your username / password is incorrect.";
                        } else {
                            this.loginError = "Something went wrong. Please refresh and try again.";
                        }
                    });
                }
            }
        }
    }
</script>
