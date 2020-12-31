<template>
    <section id="register">
        <div class="container">
            <div class="card bg-light">
                <article class="card-body mx-auto" style="max-width: 400px;">
                    <h4 class="card-title mt-3 text-center">Create Account</h4>
                    <p class="text-center">Get started with your free account</p>
                    <p>
                        <a href="" class="btn btn-block btn-twitter"> <i class="fab fa-twitter"></i> Login via Twitter</a>
                        <a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i> Login via facebook</a>
                    </p>
                    <p class="divider-text">
                        <span class="bg-light">OR</span>
                    </p>
                    <form>
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                            </div>
                            <label class="d-none" for="name">Full name</label>
                            <input id="name" class="form-control" placeholder="Full name" type="text">
                        </div> <!-- form-group// -->
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                            </div>
                            <label class="d-none" for="email">Email</label>
                            <input id="email" class="form-control" placeholder="Email address" type="email">
                        </div> <!-- form-group// -->
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                            </div>
                            <label class="d-none" for="phone">Phone</label>
                            <input id="phone" class="form-control" placeholder="Phone number" type="text">
                        </div> <!-- form-group// -->
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                            </div>
                            <label class="d-none" for="password">Password</label>
                            <input id="password" class="form-control" placeholder="Password" type="password">
                        </div> <!-- form-group// -->
                        <div class="form-group input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                            </div>
                            <label class="d-none" for="repeat_password">Repeat password</label>
                            <input id="repeat_password" class="form-control" placeholder="Repeat password" type="password">
                        </div> <!-- form-group// -->
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
                        </div> <!-- form-group// -->
                        <p class="text-center">Have an account? <router-link to="/login">Log in</router-link> </p>
                    </form>
                </article>
            </div> <!-- card.// -->
        </div> <!-- container.// -->
    </section>
</template>

<script>
    export default {
        props: {
            user: Object,
        },
        computed: {
            location: function () {
                return this.user.address.city + ', ' + this.user.address.state;
            }
        }
    }
</script>
