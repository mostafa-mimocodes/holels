<template>
    <li class="menu-item " :class="{'menu-item-submenu' : hasSubmenu}" data-menu-toggle="hover" aria-haspopup="true">
        <a href="javascript:;" class="menu-link menu-toggle">
            <slot name="svg"> </slot>
            <span class="menu-text">{{ submenuName }}</span>
            <i class="menu-arrow"></i>
        </a>
        <div v-if="hasSubmenu" class="menu-submenu menu-submenu-classic menu-submenu-right">
            <ul class="menu-subnav">
                <slot name="menuSubnavItem"></slot>
            </ul>
        </div>
    </li>
</template>

<script>
export default {
    name: "MenuSubnav",
    props:{
        hasSubmenu: Boolean,
        submenuName:String
    }
}
</script>

<style scoped>

</style>
