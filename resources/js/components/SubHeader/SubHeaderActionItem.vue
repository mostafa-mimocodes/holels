<template>
    <a :href="destination" class="btn btn-clean btn-sm font-weight-bold font-size-base mr-1">{{ itemTitle }}</a>

</template>

<script>
export default {
    name: "SubHeaderActionItem",
    props:{
        destination:{
            default:'#'
        },
        itemTitle:String
    }
}
</script>

<style scoped>

</style>
