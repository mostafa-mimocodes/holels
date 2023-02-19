<template>
    <div class="subheader py-2 py-lg-4 subheader-solid" id="kt_subheader">
        <transition
            mode="out-in"
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
            appear
        >
            <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <!--begin::Info-->
                <div class="d-flex align-items-center flex-wrap mr-2">
                    <!--begin::Page Title-->
                    <h5 class="text-dark font-weight-bold mt-2 mb-2 mr-5">{{ pageTitle }}</h5>
                    <!--end::Page Title-->
                    <!--begin::Actions-->
                    <div v-if="pageDescription" class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200"></div>
                    <span v-if="pageDescription" class="text-muted font-weight-bold mr-4">{{ pageDescription }}</span>
                    <slot name="action-buttons"></slot>
                    <!--end::Actions-->
                </div>
                <!--end::Info-->
                <div class="d-flex align-items-center">

                    <slot></slot>

                </div>

            </div>
        </transition>
    </div>
</template>

<script>

export default {
    name: "SubHeader",

    props:{
        pageTitle: String,
        pageDescription:String,
    }
}
</script>

<style scoped>

</style>
