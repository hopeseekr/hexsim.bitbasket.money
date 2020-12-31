<template>
    <section id="header">
        <div class="kt-header kt-grid__item kt-header--fixed " id="kt_header">
            <!-- begin: Header Menu -->
            <button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i
                    class="la la-close"></i></button>
            <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper">
                <div class="kt-header-menu kt-header-menu-mobile kt-header-menu--layout-tab " id="kt_header_menu">
                    <ul class="kt-menu__nav ">
                    </ul>
                </div>
            </div>
            <!-- end: Header Menu -->
            <!-- begin:: Header Topbar -->
            <div class="kt-header__topbar">
                <!--begin: Search -->
                <!--end: Search -->
                <!--begin: Notifications -->
                <!--end: Notifications -->
                <!--begin: Quick Actions -->
                <div class="kt-header__topbar-item kt-header__topbar-item--user">
                    <div class="kt-header__topbar-wrapper" @click="showQuickActionsMenu = !showQuickActionsMenu">
                        <div class="kt-header__topbar-user show">
                            <span class="kt-header__topbar-icon"><i class="flaticon2-gear"></i></span>
                        </div>
                    </div>
                    <div v-show="showQuickActionsMenu"
                         @click="showQuickActionsMenu = false"
                         class="modal-mask">
                        <div
                                class="show dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl"
                                style="position: absolute; transform: translate3d(577px, 79px, 0px); top: 0px; left: 0px; will-change: transform;"
                        >
                            <QuickActions />
                        </div>
                    </div>
                </div>
                <!--end: Quick Actions -->
                <!--begin: Cart -->
                <!-- Not implemented....
                <div class="kt-header__topbar-item dropdown">
                    <div class="kt-header__topbar-wrapper" data-offset="10px,0px" data-toggle="dropdown">
                        <span class="kt-header__topbar-icon"><i class="flaticon2-shopping-cart-1"></i><span
                                class="kt-badge kt-badge--danger">2</span></span>
                    </div>
                    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">
                        <form>
                            <MyCart/>
                        </form>
                    </div>
                </div>
                -->
                <!--end: Cart-->
                <!--begin: Quick panel -->
                <!--end: Quick panel -->
                <!--begin: Language bar -->
                <!--end: Language bar -->
                <!--begin: User Bar -->
                <div class="kt-header__topbar-item kt-header__topbar-item--user">
                    <div class="kt-header__topbar-wrapper" @click="showUserMenu = !showUserMenu">
                        <div class="kt-header__topbar-user show">
                            <span class="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
                            <span class="kt-header__topbar-username kt-hidden-mobile">{{ firstName }}</span>
                        </div>
                    </div>
                    <div v-show="showUserMenu"
                         @click="showUserMenu = false"
                         class="modal-mask">
                        <div
                             class="show dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl"
                             style="position: absolute; transform: translate3d(577px, 79px, 0px); top: 0px; left: 0px; will-change: transform;"
                        >
                            <UserMenu :user="user" />
                        </div>
                    </div>
                </div>
            </div>
                <!--end: User Bar -->
            <!-- end:: Header Topbar -->
        </div>
    </section>
</template>

<script>
    import QuickActions from "./header_dropdown_menus/QuickActions";
    // import MyCart from "./header_dropdown_menus/MyCart";
    import UserMenu from "./header_dropdown_menus/UserMenu";

    export default {
        name: "Header",
        components: {
            QuickActions,
            // MyCart,
            UserMenu
        },
        props: {
            user: Object
        },
        data() {
            return {
                showQuickActionsMenu: false,
                showUserMenu: false
            }
        },
        computed: {
            firstName: function () {
                if (!this.user || !this.user.firstName) {
                    return "Guest";
                }

                return this.user.firstName;
            }
        }
    }
</script>

<style scoped>

</style>
