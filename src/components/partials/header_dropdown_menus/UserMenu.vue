<template>
    <section id="user_menu">
        <!--begin: Head -->
        <div class="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x"
             style="background-image: url(../../../assets/media/misc/bg-1.jpg)"
        >
            <div class="kt-user-card__name">{{ user.firstName }} {{ user.lastName }}</div>
        </div>
        <!--end: Head -->
        <!--begin: Navigation -->
        <div class="kt-notification">
            <router-link class="kt-notification__item" to="/profile">
                <div class="kt-notification__item-icon"><i class="flaticon2-calendar-3 kt-font-success"></i></div>
                <div class="kt-notification__item-details">
                    <div class="kt-notification__item-title kt-font-bold"> My Profile</div>
                    <div class="kt-notification__item-time"> Account settings and more</div>
                </div>
            </router-link>
            <div class="kt-notification__custom kt-space-between">
                <a @click="logout" class="btn btn-label btn-label-brand btn-sm btn-bold">Sign Out</a>
                <router-link class="btn btn-clean btn-sm btn-bold" to="/coverage">Upgrade Plan</router-link>
            </div>
        </div>
        <!--end: Navigation -->
    </section>
</template>

<script>
    export default {
        name: "UserMenu",
        props: ['showUserMenu', 'user'],
        methods: {
            logout() {
                this.$auth.logout();

                this.$emit('loggedOut');
            }
        }
    }
</script>

<style scoped>

</style>
