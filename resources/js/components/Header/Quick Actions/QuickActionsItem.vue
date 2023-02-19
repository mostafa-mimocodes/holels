<template>
    <div class="col-6">
        <a :href="destination" class="d-block py-10 px-5 text-center bg-hover-light border-right border-bottom">
            <span class="svg-icon svg-icon-3x svg-icon-success">
                <slot></slot>
            </span>
            <span class="d-block text-dark-75 font-weight-bold font-size-h6 mt-2 mb-1">{{ text }}</span>
            <span class="d-block text-dark-50 font-size-lg">{{ subtext }}</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "QuickActionsItem",
    props:{
        destination:{
            default:'#'
        },
        text:String,
        subtext:String

    }
}
</script>

<style scoped>

</style>
