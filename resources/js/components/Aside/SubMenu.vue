<template>

    <li class="menu-item menu-item-submenu" :class="{'menu-item-active' : activeSubMenu}" aria-haspopup="true" data-menu-toggle="hover" >
        <inertia-link :href="routeParams? route(routeName,routeParams) :route(routeName)" class="menu-link menu-toggle">
            <i class="menu-bullet menu-bullet-dot">
                <span></span>
            </i>
            <span class="menu-text">{{ name }}</span>
        </inertia-link>
    </li>
</template>

<script>

export default {
    name: "SubMenu",
    props: {
        name:{
            type:String,
            default: 'Item'
        },
        routeName:{
            type:String,
            default:'home'
        },
        activeSubMenu:{
            type:Boolean,
            default:false
        },
        routeParams:{
            type:Object
        },
        parentName:{
            type:String,
            default:'Dashboard'
        }

    },
    methods:{

    },
    mounted(){
        if(this.activeSubMenu){
            this.emitter.emit("active-menu", { activeSubMenu: true, slug: this.name.toLowerCase().replace(/\s/g,'-') });
        }

    }
}
</script>

<style scoped>

</style>
