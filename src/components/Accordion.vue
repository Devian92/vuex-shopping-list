<template lang="jade">
    .accordion(v-bind:style="appearence")
        input.accordion__radio(
            type="checkbox"
            id="{{ id }}"
            checked="true"
        )
        label.accordion__title(for="{{ id }}")
            slot
        .accordion__content
            slot(name="content")
</template>

<script>
    export default {
        props: {
            id: {
                required: true
            },
            appearence: {
                default: ''
            }
        }
    }
</script>

<style lang="sass" scoped>
    $accordionTiming: cubic-bezier(0, 1.05, 0, 1);

    .accordion {

        width: 100%;

        .accordion__radio {
            position: absolute;
            overflow: hidden;
            clip: rect(0 0 0 0);
            height: 1px; width: 1px;
            margin: -1px; padding: 0; border: 0;
        }

        .accordion__title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            transition: all .5s $accordionTiming;
            user-select: none;
            position: relative;
            cursor: pointer;
            min-height: 45px;
            width: 100%;
            padding: 0 15px;
            font-size: 1rem;
            font-weight: bold;
            color: inherit;
            border-bottom: 1px solid #BBBBBB;

            &:after, &:before {
                content: none;
            }

            &:after {
                content: '';
                width: 16px;
                height: 16px;
                background: url("/img/cd-icon-arrow.svg") no-repeat center center;
                transform: rotate(-90deg);
                transition: transform 0.3s ease;
            }
        }

        .accordion__content {
            transition: max-height .5s $accordionTiming,
            opacity .5s $accordionTiming;

            max-height: 0;
            overflow: hidden;

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;

            & > div {
                animation: accordion-out .65s $accordionTiming forwards;
            }
        }

        & .accordion__radio:checked {

            & ~ .accordion__content {
                transition: max-height .5s accordionTiming,
                opacity .5s linear;
                max-height: 200px;
                overflow-y: auto;

                & > div {
                    animation: accordion-in .65s $accordionTiming forwards;
                }
            }

            & + .accordion__title {

                &:after {
                    transform: rotate(0deg);
                }
            }
        }
    }

@keyframes accordion-in {
    0% {
        opacity: 0;
        transform: scale(0.8);
        transform-origin: 50% 0;
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes accordion-out {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.8);
    }
}
</style>
