<template>
    <li class="navi-item">
        <a :href="destination" class="navi-link">
            <span class="navi-icon">
                <i :class="`flaticon2-${iconName}`"></i>
            </span>
            <span class="navi-text">{{ itemTitle }}</span>
            <span v-if="badgeTitle" class="navi-link-badge">
                <span :class="`label label-${badgeStyle} label-inline font-weight-bold ${lableStyle}`" >{{ badgeTitle }}</span>
            </span>
        </a>
    </li>
</template>

<script>
export default {
    name: "SubHeaderDropdownItem",
    props:{
        destination:{
            default:'#'
        },
        iconName:{
            type:String,
            default:'list-3'
        },
        itemTitle:String,
        badgeTitle:String,
        badgeStyle: {
            type:String,
            default:'light-primary'
        },
        lableStyle:String
    }
}
</script>

<style scoped>

</style>
