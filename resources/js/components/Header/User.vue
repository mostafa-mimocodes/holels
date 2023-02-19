<template>
    <div class="topbar-item">
        <div class="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" @click="openMenu">
            <span class="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
            <span class="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">{{ user.name }}</span>
            <span class="symbol symbol-lg-35 symbol-25 symbol-light-success">
                <span class="symbol-label font-size-h5 font-weight-bold">{{ user.name[0] }}</span>
            </span>
        </div>
    </div>


</template>

<script>
export default {
    name: "User",
    computed: {
        user(){
            return this.$page.props.auth.user
        }
    },
    methods:{
        openMenu(){
            this.emitter.emit('open-user-panel')
        },
    }
}
</script>

<style scoped>

</style>
