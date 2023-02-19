<template>
    <li class="menu-item" aria-haspopup="true">
        <a href="javascript:;" class="menu-link">
            <i class="menu-bullet menu-bullet-dot">
                <span></span>
            </i>
            <span class="menu-text">{{ name }}</span>
        </a>
    </li>
</template>

<script>
export default {
    name: "MenuSubnavItem",
    props:{
        name:String
    }
}
</script>

<style scoped>

</style>
