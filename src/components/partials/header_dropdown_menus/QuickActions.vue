<template>
    <section id="quick_actions">
        <!--begin: Head -->
        <div class="kt-head kt-head--skin-dark" style="background-image: url(../../../assets/media/misc/bg-1.jpg)">
            <h3 class="kt-head__title">
                User Quick Actions <span class="kt-space-15"></span>
            </h3>
        </div>
        <!--end: Head -->
        <!--begin: Grid Nav -->
        <div class="kt-grid-nav kt-grid-nav--skin-light">
            <div class="kt-grid-nav__row">
                <router-link class="kt-grid-nav__item" to="/profile/change-password">
                    <span class="kt-grid-nav__icon">
                        <svg class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" height="24px" version="1.1"
                             viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                <mask fill="white">
                                    <use xlink:href="#path-1"/>
                                </mask>
                                <g/>
                                <path d="M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z"
                                      fill="#000000"/>
                            </g>
                        </svg>
                    </span>
                    <span class="kt-grid-nav__title">Password</span>
                    <span class="kt-grid-nav__desc">Change Password</span>
                </router-link>
                <router-link class="kt-grid-nav__item" to="/coverage">
                    <span class="kt-grid-nav__icon">
                        <svg class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" height="24px" version="1.1"
                             viewBox="0 0 24 24"
                             width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                <rect height="24" width="24" x="0" y="0"/>
                                <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                                      fill="#000000" opacity="0.3"/>
                                <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z"
                                      fill="#000000"/>
                            </g>
                        </svg>
                    </span>
                    <span class="kt-grid-nav__title">Coverage</span> <span
                        class="kt-grid-nav__desc">Edit Coverage</span>
                </router-link>
            </div>
            <div class="kt-grid-nav__row">
                <router-link class="kt-grid-nav__item" to="/profile/invoices">
                    <span class="kt-grid-nav__icon">
                        <svg class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" height="24px" version="1.1"
                             viewBox="0 0 24 24"
                             width="24px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                <polygon points="0 0 24 0 24 24 0 24"/>
                                <path d="M3.52270623,14.028695 C2.82576459,13.3275941 2.82576459,12.19529 3.52270623,11.4941891 L11.6127629,3.54050571 C11.9489429,3.20999263 12.401513,3.0247814 12.8729533,3.0247814 L19.3274172,3.0247814 C20.3201611,3.0247814 21.124939,3.82955935 21.124939,4.82230326 L21.124939,11.2583059 C21.124939,11.7406659 20.9310733,12.2027862 20.5869271,12.5407722 L12.5103155,20.4728108 C12.1731575,20.8103442 11.7156477,21 11.2385688,21 C10.7614899,21 10.3039801,20.8103442 9.9668221,20.4728108 L3.52270623,14.028695 Z M16.9307214,9.01652093 C17.9234653,9.01652093 18.7282432,8.21174298 18.7282432,7.21899907 C18.7282432,6.22625516 17.9234653,5.42147721 16.9307214,5.42147721 C15.9379775,5.42147721 15.1331995,6.22625516 15.1331995,7.21899907 C15.1331995,8.21174298 15.9379775,9.01652093 16.9307214,9.01652093 Z"
                                      fill="#000000" fill-rule="nonzero" opacity="0.3"/>
                            </g>
                        </svg>
                    </span>
                    <span class="kt-grid-nav__title">Invoice</span> <span class="kt-grid-nav__desc">My Invoices</span>
                </router-link>
                <router-link class="kt-grid-nav__item" to="/profile/billing">
                    <span class="kt-grid-nav__icon">
                        <svg class="kt-svg-icon kt-svg-icon--success kt-svg-icon--lg" height="24px" version="1.1"
                             viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                                <rect height="24" width="24" x="0" y="0"/>
                                <rect fill="#000000" height="14" opacity="0.3" rx="2" width="20" x="2" y="5"/>\
                                <rect fill="#000000" height="3" width="20" x="2" y="8"/>
                                <rect fill="#000000" height="2" opacity="0.3" rx="1" width="4" x="16" y="14"/>
                            </g>
                        </svg>
                    </span>
                    <span class="kt-grid-nav__title">Billing</span> <span
                        class="kt-grid-nav__desc">Billing Account</span>
                </router-link>
            </div>
        </div>
        <!--end: Grid Nav -->
    </section>
</template>

<script>
    export default {
        name: "QuickActions"
    }
</script>

<style scoped>

</style>