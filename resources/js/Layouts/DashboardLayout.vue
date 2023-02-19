<template>
    <mobile-header />
    <div class="d-flex flex-column flex-root">
    <div class="d-flex flex-row flex-column-fluid page">
        <Aside />
        <div class="d-flex flex-column flex-row-fluid wrapper">
            <Header />

            <sub-header>

                <portal-target name="subHeader"></portal-target>
            </sub-header>

            <transition
                mode="out-in"
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
                appear
            >
                <main :key="$page.url">
                    <slot/>
                </main>
            </transition>
        </div>
        <user-panel />
        <div id="kt_scrolltop" class="scrolltop" >
			<span class="svg-icon">
				<!--begin::Svg Icon | path:assets/media/svg/icons/Navigation/Up-2.svg-->
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
					<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<polygon points="0 0 24 0 24 24 0 24" />
						<rect fill="#000000" opacity="0.3" x="11" y="10" width="2" height="10" rx="1" />
						<path d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z" fill="#000000" fill-rule="nonzero" />
					</g>
				</svg>
                <!--end::Svg Icon-->
			</span>
        </div>
    </div>

    </div>

</template>

<script>
import Aside from "@/Shared/Aside.vue";
import Header from "@/Shared/Header.vue";
import SubHeader from "@/Shared/SubHeader.vue";
import MobileHeader from "@/Shared/MobileHeader.vue";
import UserPanel from "@/components/Header/UserPanel.vue";
export default {
    name: "DashboardLayout",
    components: {UserPanel, MobileHeader, SubHeader, Header, Aside},
    mounted() {
        this.initScrollToTop()
    },
    methods:{
        initScrollToTop(){
            KTUtil.ready(function (){
                // Init Scrolltop
                if (typeof KTLayoutScrolltop !== 'undefined') {
                    KTLayoutScrolltop.init('kt_scrolltop');
                }
            })
        }
    }
}
</script>

<style scoped>



</style>
