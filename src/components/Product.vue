<template lang="jade">
    .product.mdl-card.mdl-shadow--4dp(
        v-if="product.show"
        transition="animate"
    )
        .mdl-card__title.mdl-card--expand(
            :style=" 'background-image: url(' + product.image + ');'"
        )
            h2.mdl-card__title-text {{ product.category }}
        .mdl-card__supporting-text {{ product.name + ' - ' + product.variation }}
        .mdl-card__actions.mdl-card--border
            a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect Add To Cart
</template>

<script>

    export default {
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        ready: function() {

        },
        components: {

        }
    }
</script>

<style lang="sass" scoped>
    .product {
        height: 350px;
        margin: 0 auto 20px;

        transform-origin: center center;

        .mdl-card__title {
            color: #fff;
            background-position: bottom right;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }

    .animate-enter {
        animation: product-in .3s ease;
    }

    .animate-leave {
        animation: product-out .3s ease;
    }

    @keyframes product-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes product-out {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
