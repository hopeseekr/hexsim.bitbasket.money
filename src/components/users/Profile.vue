<template>
    <section id="edit_profile">
        <div class="container">
            <div v-if="!user" style="height: 500px"></div>
            <div v-if="user">
                <div class="header">
                    <a href="#">
                        {{ user.firstName }} {{ user.lastName}}
                        <i class="flaticon2-correct kt-font-success"><span
                                style="display: none">{{ user.id }}</span></i>
                    </a>
                </div>
                <div class="body">
                    <div class="row">
                        <div>
                            <label>Email:</label>
                            {{ user.email }}
                        </div>
                        <div>
                            <label>Phone:</label>
                            {{ user.phone.cell }}
                        </div>
                        <div>
                            <label>Location:</label>
                            {{ location }}
                        </div>
                    </div>
                    <div class="row">
                        <router-link to="/profile/personal-info">
                            <span>
                                <span>
                                    <svg class="kt-svg-icon" height="24px"
                                         version="1.1" viewBox="0 0 24 24" width="24px"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g fill="none" fill-rule="evenodd" stroke="none"
                                           stroke-width="1">
                                            <polygon id="Shape" points="0 0 24 0 24 24 0 24"/>
                                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                                  fill="#000000" fill-rule="nonzero" id="Mask"
                                                  opacity="0.3"/>
                                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                                  fill="#000000" fill-rule="nonzero" id="Mask-Copy"/>
                                        </g>
                                    </svg>
                                </span>
                                <span>
                                    Personal Information
                                </span>
                            </span>
                        </router-link>
                        <router-link to="/profile/address-info">
                            <span>
                                <span>
                                    <svg class="kt-svg-icon" height="24px" version="1.1"
                                         viewBox="0 0 24 24" width="24px"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g fill="none" fill-rule="evenodd" stroke="none"
                                           stroke-width="1">
                                            <rect height="24" width="24" x="0" y="0"/>
                                            <path d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 C2.99998155,19.0000663 2.99998155,19.0000652 2.99998155,19.0000642 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z"
                                                  fill="#000000" opacity="0.3"/>
                                            <path d="M13.8,12 C13.1562,12 12.4033,12.7298529 12,13.2 C11.5967,12.7298529 10.8438,12 10.2,12 C9.0604,12 8.4,12.8888719 8.4,14.0201635 C8.4,15.2733878 9.6,16.6 12,18 C14.4,16.6 15.6,15.3 15.6,14.1 C15.6,12.9687084 14.9396,12 13.8,12 Z"
                                                  fill="#000000" opacity="0.3"/>
                                        </g>
                                    </svg>
                                </span>
                                <span>
                                    Address Information
                                </span>
                            </span>
                        </router-link>
                        <router-link to="/profile/change-password">
                            <span>
                                <span>
                                    <svg class="kt-svg-icon" height="24px"
                                         version="1.1" viewBox="0 0 24 24" width="24px"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g fill="none" fill-rule="evenodd" stroke="none"
                                           stroke-width="1">
                                            <rect height="24" id="bound" width="24" x="0" y="0"/>
                                            <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                                                  fill="#000000" id="Path-50" opacity="0.3"/>
                                            <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                                                  fill="#000000" id="Mask" opacity="0.3"/>
                                            <path d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                                  fill="#000000" id="Mask-Copy" opacity="0.3"/>
                                        </g>
                                    </svg>
                                </span>
                                <span>
                                    Change Password
                                </span>
                            </span>
                        </router-link>
                        <router-link to="/profile/invoices">
                            <span>
                                <span>
                                    <svg class="kt-svg-icon" height="24px" version="1.1"
                                         viewBox="0 0 24 24" width="24px"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g fill="none" fill-rule="evenodd" stroke="none"
                                           stroke-width="1">
                                            <rect height="24" id="bound" width="24" x="0" y="0"/>
                                            <rect fill="#000000" height="3" id="Rectangle-20" rx="1.5"
                                                  width="16" x="4" y="5"/>
                                            <path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L12.5,10 C13.3284271,10 14,10.6715729 14,11.5 C14,12.3284271 13.3284271,13 12.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z"
                                                  fill="#000000" id="Combined-Shape" opacity="0.3"/>
                                        </g>
                                    </svg>
                                </span>
                                <span>
                                    Invoices
                                </span>
                            </span>
                        </router-link>
                        <router-link to="/profile/billing">
                            <span>
                                <span>
                                    <svg class="kt-svg-icon" height="24px"
                                         version="1.1" viewBox="0 0 24 24" width="24px"
                                         xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <g fill="none" fill-rule="evenodd" stroke="none"
                                           stroke-width="1">
                                            <rect height="24" id="bound" width="24" x="0" y="0"/>
                                            <rect fill="#000000" height="4" id="Rectangle-7-Copy" rx="1"
                                                  width="19" x="2" y="5"/>
                                            <rect fill="#000000" height="10" id="Rectangle-7-Copy-4"
                                                  opacity="0.3" rx="1" width="19" x="2" y="11"/>
                                        </g>
                                    </svg>
                                </span>
                                <span>
                                    Billing Account
                                </span>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!--Begin:: App Content-->
        <div style="margin-top: -20px">.
            <keep-alive>
                <router-view
                    :user="user"
                ></router-view>
            </keep-alive>
        </div>
        <!--End:: App Content-->
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
