<template>
    <img :src="settings.logo_img" alt="Laravel" :width="width">
</template>

<script>
export default {
    name: "Logo",
    computed: {
        settings(){
            return this.$page.props.settings;
        }
    },
    props:{
        width:{
            type: String,
        }
    }

}
</script>

<style scoped>

</style>
