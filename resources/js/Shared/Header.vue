<template>
    <div id="kt_header" class="header header-fixed">

        <div class="container-fluid d-flex align-items-center justify-content-between">

            <div id="kt_header_menu_wrapper" class="header-menu-wrapper header-menu-wrapper-left">
                <!--            <div class="header-logo">-->
                <!--                <a href="{{ url('/') }}">-->
                <!--                    <img alt="Logo" src="{{ asset('media/logos/'.$kt_logo_image) }}"/>-->
                <!--                </a>-->
                <!--            </div>-->

                <div id="kt_header_menu" class="header-menu header-menu-mobile">
                    <ul class="menu-nav">
                        <menu-item name="Dashboard" >
                            <template #menuSubnav >
                                <menu-subnav submenu-name="items" :has-submenu="true">
                                    <template #menuSubnavItem>
                                        <menu-subnav-item name="item 1" />
                                        <menu-subnav-item name="item 2" />
                                        <menu-subnav-item name="item 3" />
                                        <menu-subnav-item name="item 4" />
                                        <menu-subnav-item name="item 5" />
                                        <menu-subnav-item name="item 6" />
                                    </template>
                                </menu-subnav>
                            </template>
                        </menu-item>
                    </ul>
                </div>
            </div>

            <div class="topbar">
                <search />
                <notification />
                <quick-actions />
<!--                <quick-panel />-->
                <languages/>
                <user />
            </div>

        </div>
    </div>

</template>

<script>
import MenuItem from "@/components/Header/MenuItem.vue";
import MenuSubnav from "@/components/Header/MenuSubnav.vue";
import MenuSubnavItem from "@/components/Header/MenuSubnavItem.vue";
import Search from "@/components/Header/Search.vue";
import Notification from "@/components/Header/Notification.vue";
import QuickActions from "@/components/Header/QuickActions.vue";
import Languages from "@/components/Header/Languages.vue";
import QuickPanel from "@/components/Header/QuickPanel.vue";
import User from "@/components/Header/User.vue";
export default {
    name: "Header",
    components: {User, QuickPanel, Languages, QuickActions, Notification, Search, MenuSubnavItem, MenuSubnav, MenuItem},

}
</script>

<style scoped>

</style>
