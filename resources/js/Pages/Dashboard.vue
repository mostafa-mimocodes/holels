<template>
    <Head title="Dashboard" />

    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <portal to="subHeader">
            <sub-header
                pageDescription="Hotel Dashboard"
                page-title="Dashboard"
            >
            </sub-header>
        </portal>
        <!--    begin::Entry-->
        <div class="d-flex flex-column-fluid">
            <!--begin::Container-->
            <div class="container">
                <!--begin::Dashboard-->
                <stats-widget
                    :total-bookings="totalBookings"
                    :total-price="totalPrice"
                    :canceled-bookings="canceledBookings"
                />
                <graph-widget />

                <!--end::Dashboard-->
            </div>
            <!--end::Container-->
        </div>
        <!--    end::Entry-->
    </div>
</template>

<script>
import { Head } from "@inertiajs/inertia-vue3";
import SubHeader from "@/Shared/SubHeader.vue";
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import SubHeaderActionItem from "@/components/SubHeader/SubHeaderActionItem.vue";
import SubHeaderDropdownItem from "@/components/SubHeader/SubHeaderDropdownItem.vue";
import StatsWidget from "@/Dashboard Widgets/StatsWidget.vue";
import GraphWidget from "@/Dashboard Widgets/GraphWidget.vue";
export default {
    name: "Dashboard",
    components: {
        SubHeaderDropdownItem,
        SubHeaderActionItem,
        Head,
        SubHeader,
        StatsWidget,
        GraphWidget,
    },
    layout: DashboardLayout,
    data() {
        return {};
    },
    props: ["totalBookings", "totalPrice", "canceledBookings"],
    mounted() {
        this.emitter.emit("close-open-menus");
    },
};
</script>
