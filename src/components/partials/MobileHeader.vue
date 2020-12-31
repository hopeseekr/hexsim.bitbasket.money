<template>
    <section id="mobileheader">
        <div class="kt-header-mobile kt-header-mobile--fixed " id="kt_header_mobile">
            <div class="kt-header-mobile__logo">
                <a href="?page=index">
                    <img alt="Logo" src="/assets/media/logos/logo-2-sm.png"/>
                </a>
            </div>
            <div class="kt-header-mobile__toolbar">
                <button class="kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left"
                        id="kt_aside_mobile_toggler"><span></span></button>
                <button class="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler" style="display: none;">
                    <span></span></button>
                <button class="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i
                        class="flaticon-more"></i></button>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: "MobileHeader"
    }
</script>

<style scoped>

</style>