<template>
    <div
        :class="
            'card card-custom bg-' + backgroundColor + ' card-stretch gutter-b'
        "
    >
        <!--begin::Body-->
        <div class="card-body">
            <span class="svg-icon svg-icon-2x" :class="svgColor">
                <slot />
            </span>
            <span
                class="card-title font-weight-bolder font-size-h2 mb-0 mt-6 d-block"
                :class="textColor"
                >{{ isPrice ? "$" : null }}{{ numberToShow }}</span
            >
            <span class="font-weight-bold font-size-sm" :class="desTextColor">{{
                cardTitle
            }}</span>
        </div>
        <!--end::Body-->
    </div>
</template>

<script>
export default {
    name: "StatsCard",
    props: {
        backgroundColor: {
            type: String,
            default: "white",
        },
        numberToShow: {
            type: Number,
            default: 0,
        },
        cardTitle: {
            type: String,
            default: "",
        },
        isPrice: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        textColor() {
            if (this.backgroundColor === "white") {
                return "text-dark-75";
            } else {
                return "text-white";
            }
        },
        svgColor() {
            if (this.backgroundColor === "white") {
                return "svg-icon-info";
            } else {
                return "svg-icon-white";
            }
        },
        desTextColor() {
            if (this.backgroundColor === "white") {
                return "text-muted";
            } else {
                return "text-white";
            }
        },
    },
};
</script>

<style scoped></style>
