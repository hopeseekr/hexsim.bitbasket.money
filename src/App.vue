<template>
    <section id="base">
        <MobileHeader/>
        <div class="kt-grid kt-grid--hor kt-grid--root">
            <Header :user="user" />
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
                <SideMenu/>
                <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                    <div class="kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
                        <router-view @loggedIn="loggedIn" :user="user"></router-view>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
        <div id="kt_scrolltop" class="kt-scrolltop"><i class="fa fa-arrow-up"></i></div>
    </section>
</template>

<script>
    import {UserRepo} from "@/repositories/UserRepo";

    import Header from "./components/partials/Header";
    import MobileHeader from "./components/partials/MobileHeader";

    export default {
        name: 'app',
        components: {
            Header,
            MobileHeader
        },
        data() {
            return {
                // Component State
                loading: true,
                error: null,
                success: false,

                // Model State
                email: null,
                has_error: false,
                user: {
                    id: null,
                    status: null,
                    prefix: null,
                    firstName: '',
                    lastName: '',
                    suffix: null,
                    email: '',
                    phone: {
                        home: null,
                        cell: null,
                        work: null,
                    }
                },
            };
        },
        created() {
            // Refetch it from scratch.
            this.fetchUserInfo(true);
        },
        methods: {
            loggedIn: function () {
                console.log("You've logged in!!");
                this.fetchUserInfo(true);
            },
            fetchUserInfo: function (noCache) {
                this.error = this.user = null;
                this.loading = true;
                this.user_id = localStorage.getItem('user:id');

                if (!this.user_id) {
                    return;
                }

                // Use the cache, if possible.
                const grabCachedUser = function () {
                    if (noCache) { return null; }

                    return JSON.parse(localStorage.getItem('user'));
                };

                const user = grabCachedUser();
                if (user) {
                    alert("using cached user");
                    this.user = user;
                    return;
                }
                const userRepo = new UserRepo(this.axios, this.user_id);
                userRepo.fetchInfo()
                    .then(user => {
                        this.user = user;
                        localStorage.setItem('user', JSON.stringify(this.user));
                    })
                    .catch(error => {
                        if (error.response.status === 401) {
                            this.$auth.logout();
                        }

                        console.warn(error);
                        this.error = error;
                    })
                    .finally(() => this.loading = false);
            }
        }
    }
</script>

