<template>
    <!--begin::Item-->
    <a :href="destination" class="navi-item">
        <div class="navi-link">
            <div class="symbol symbol-40 bg-light mr-3">
                <div class="symbol-label">
                    <span :class="`svg-icon svg-icon-md svg-icon-${iconStyle}`">
                        <!--begin::Svg Icon | path:assets/media/svg/icons/General/Notification2.svg-->
                        <slot></slot>
                        <!--end::Svg Icon-->
                    </span>
                </div>
            </div>
            <div class="navi-text">
                <div class="font-weight-bold">{{ itemTitle }}</div>
                <div class="text-muted">{{ itemText }}
                    <span v-if="labelText" :class="`label label-light-${ labelStyle } label-inline font-weight-bold`">{{ labelText }}</span></div>
            </div>
        </div>
    </a>
    <!--end:Item-->
</template>

<script>
export default {
    name: "UserItem",
    props:{
        destination:{
            default:'#'
        },
        itemTitle:String,
        iconStyle:{
            type:String,
            default:'primary'
        },
        itemText:String,
        labelText:String,
        labelStyle: {
            type:String,
            default:'danger'
        },
    }
}
</script>

<style scoped>

</style>
