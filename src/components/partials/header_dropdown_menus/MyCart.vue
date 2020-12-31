<template>
    <section id="my_cart">
        <!-- begin:: Mycart -->
        <div class="kt-mycart">
            <div class="kt-mycart__head kt-head" style="background-image: url(assets/media/misc/bg-1.jpg);">
                <div class="kt-mycart__info">
                    <span class="kt-mycart__icon"><i class="flaticon2-shopping-cart-1 kt-font-success"></i></span>
                    <h3 class="kt-mycart__title">
                        My Cart
                    </h3>
                </div>
                <div class="kt-mycart__button">
                    <a class="btn btn-success btn-sm" href="?page=shopping-cart" style=" ">3 Items</a>
                </div>
            </div>
            <div class="kt-mycart__body kt-scroll" data-height="245" data-mobile-height="200" data-scroll="true">
                <div class="kt-mycart__item">
                    <div class="kt-mycart__container">
                        <div class="kt-mycart__info">
                            <a class="kt-mycart__title" href="#"> Fujifilm </a> <span class="kt-mycart__desc"> Profile info, Timeline etc </span>
                            <div class="kt-mycart__action"><span class="kt-mycart__price">$ 520</span> <span
                                    class="kt-mycart__text">for</span> <span class="kt-mycart__quantity">6</span> <a
                                    class="btn btn-label-success btn-icon" href="#">&minus;</a> <a class="btn btn-label-success btn-icon"
                                                                                                   href="#">&plus;</a>
                            </div>
                        </div>
                        <a class="kt-mycart__pic" href="#">
                            <img src="/assets/media/products/product16.jpg" title="">
                        </a>
                    </div>
                </div>
                <div class="kt-mycart__item">
                    <div class="kt-mycart__container">
                        <div class="kt-mycart__info">
                            <a class="kt-mycart__title" href="#"> Candy Machine </a> <span class="kt-mycart__desc"> For PHoto & Others </span>
                            <div class="kt-mycart__action"><span class="kt-mycart__price">$ 784</span> <span
                                    class="kt-mycart__text">for</span> <span class="kt-mycart__quantity">4</span> <a
                                    class="btn btn-label-success btn-icon" href="#">&minus;</a> <a class="btn btn-label-success btn-icon"
                                                                                                   href="#">&plus;</a>
                            </div>
                        </div>
                        <a class="kt-mycart__pic" href="#">
                            <img alt="" src="/assets/media/products/product15.jpg" title="">
                        </a>
                    </div>
                </div>
            </div>
            <div class="kt-mycart__footer">
                <div class="kt-mycart__section">
                    <div class="kt-mycart__subtitel"><span>Sub Total</span> <span>Taxes</span> <span>Total</span></div>
                    <div class="kt-mycart__prices"><span>$ 840.00</span> <span>$ 72.00</span> <span
                            class="kt-font-brand">$ 912.00</span></div>
                </div>
                <div class="kt-mycart__button kt-align-right">
                    <a class="btn btn-primary btn-sm" href="?page=shopping-cart">Place Order</a>
                </div>
            </div>
        </div>
        <!-- end:: Mycart -->
    </section>
</template>

<script>
    export default {
        name: "MyCart"
    }
</script>

<style scoped>

</style>
