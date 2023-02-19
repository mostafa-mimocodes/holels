<template>
    <li class="menu-item menu-item-submenu" :class="{'menu-item-open' : isOpen ,'menu-item-here menu-item-open':activeSubMenu,'menu-item-active':active || activeSubMenu}" aria-haspopup="true" >

        <a v-if="hasSubmenu" href="javascript:;" class="menu-link" @click="toggle">

                      <slot />

            <span class="menu-text">{{name}}</span>

            <i  class="menu-arrow"></i>
        </a>
        <inertia-link v-else :href="routeData ? route(routeName,routeData) :route(routeName)" class="menu-link">

            <slot />

            <span class="menu-text">{{name}}</span>

        </inertia-link>
        <transition name="expand"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @before-leave="beforeLeave"
                    @leave="leave"
        >
        <div v-show="isOpen" class="menu-submenu" >
            <i class="menu-arrow"></i>
            <ul class="menu-subnav">
                <slot name="subMenu"></slot>
            </ul>
        </div>
        </transition>

    </li>
</template>

<script>

export default {
    name: "MenuItem",
    props: {
        routeName: {
            type:String,
            default:'home'
        },
        userId:String,
        name:String,
        hasSubmenu: {
            type:Boolean,
            default:false
        },
        routeData:{
            type:Object
        },
        activeSubMenu:{
            type:Boolean,
            default:false
        },
        active:{
            type:Boolean,
            default:false
        }
        },
    data(){
        return {
            isOpen:false,
            slug:this.name.toLowerCase().replace(/\s/g,'-'),
        }
    },
    mounted() {
      this.emitter.on('close-open-menus',e => {
          if(!this.active && this.isOpen){
              setTimeout(() => {
                  this.isOpen = false
              },500)
          }
      })
    },
    methods:{
        toggle(){
            if(this.hasSubmenu){
                this.isOpen = !this.isOpen
            }
        },
        enter(el){
           el.style.height = 'auto'
           const height = getComputedStyle(el).height;
           el.style.height = 0;
           getComputedStyle(el);
           setTimeout(() => {
               el.style.height = height
           })
        },
        afterEnter(el){
            el.style.height = 'auto'
        },
        beforeLeave(el){
            el.style.display = 'block'
        },
        leave(el){
            el.style.height = getComputedStyle(el).height
            getComputedStyle(el);
            setTimeout(() => {
                el.style.height = 0
            })
        }
    }
}
</script>

<style scoped>

.expand-enter-active, .expand-leave-active{
    transition: height .4s ease-in-out;
    animation-delay: .5s;
    overflow: hidden;
}
</style>
