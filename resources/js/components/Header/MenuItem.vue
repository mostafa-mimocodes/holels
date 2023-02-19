<template>
    <li class="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here menu-item-active" data-menu-toggle="click" aria-haspopup="true">
        <a href="javascript:;" class="menu-link menu-toggle">
            <span class="menu-text">{{ name }}</span>
            <i class="menu-arrow"></i>
        </a>
        <div class="menu-submenu menu-submenu-classic menu-submenu-left">
            <ul class="menu-subnav">
                <slot name="menuSubnav" ></slot>
            </ul>
        </div>
    </li>

</template>

<script>
export default {
    name: "MenuItem",
    props:{
        name:String ,
    }
}
</script>

<style scoped>

</style>
