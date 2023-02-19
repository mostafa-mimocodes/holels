<template>
    <!--begin::Item-->
    <a :href="destination" class="navi-item">
        <div class="navi-link">
            <div class="navi-icon mr-2">
                <i :class="`flaticon2-${iconName} text-${textStyle}`"></i>
            </div>
            <div class="navi-text">
                <div class="font-weight-bold">{{ text }}</div>
                <div class="text-muted">{{ time }}</div>
            </div>
        </div>
    </a>
    <!--end::Item-->
</template>

<script>
export default {
    name: "EventsItem",
    props:{
        destination:{
            type:String,
            default:'#'
        },
        iconName:String,
        textStyle:String,
        text:String,
        time:String
    }
}
</script>

<style scoped>

</style>
