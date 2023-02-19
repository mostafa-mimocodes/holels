<template>
    <li class="menu-section">
        <h4 class="menu-text">{{ name }}</h4>

        <i class="menu-icon ki ki-bold-more-hor icon-md"></i>
    </li>
</template>

<script>
export default {
    name: "MenuSection",
    props:['name']
}
</script>

<style scoped>

</style>
