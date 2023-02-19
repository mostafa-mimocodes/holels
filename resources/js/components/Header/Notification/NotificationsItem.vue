<template>
    <!--begin::Item-->
    <div class="d-flex align-items-center mb-6">
        <div :class="`symbol symbol-40 symbol-light-${iconStyle} mr-5`">
            <span class="symbol-label">
                <span :class="`svg-icon svg-icon-lg svg-icon-${iconStyle}`">
                    <slot></slot>
                </span>
            </span>
        </div>
        <!--begin::Text-->
        <div class="d-flex flex-column font-weight-bold">
            <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">{{ text }}</a>
            <span class="text-muted">{{ subText }}</span>
        </div>
        <!--end::Text-->
    </div>
    <!--end::Item-->
</template>

<script>
export default {
    name: "NotificationsItem",
    props:{
        text:String,
        subText:String,
        iconStyle:String
    }
}
</script>

<style scoped>

</style>
