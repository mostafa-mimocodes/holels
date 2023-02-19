import './bootstrap';
// import '../css/app.css';
import 'animate.css';



import { createApp, h } from 'vue';
import {createInertiaApp, InertiaLink, Link} from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import VueApexCharts from "vue3-apexcharts";

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import PortalVue from 'portal-vue'

import store from "@/store";

import i18n from "../lang";



import { InertiaProgress } from '@inertiajs/progress';
import LoginLayout from "@/Layouts/LoginLayout.vue";
import Aside from "@/Shared/Aside.vue";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";

import mitt from 'mitt'

const emitter = mitt()

import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        const VueApp = createApp({ render: () => h(app, props) });

            VueApp.config.globalProperties.emitter = emitter

        VueApp.use(plugin)
            .use(VueGoodTablePlugin)
            .use(VueApexCharts)
            .use(autoAnimatePlugin)
            .use(PortalVue)
            .use(store)
            .use(i18n)
            .component('LoginLayout', LoginLayout)
            .component('DashboardLayout', DashboardLayout)
            .component('Aside', Aside)
            .component('Link', Link)
            .component('InertiaLink', InertiaLink)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
