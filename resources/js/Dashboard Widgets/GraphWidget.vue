<template>
    <!--Begin::Row-->
    <div class="row">
        <div class="col-xl-12">
            <bar-chart />
        </div>
        <div class="col-xl-12">
            <pie-chart />
        </div>
        <div class="col-xl-12">
            <cultser-chart />
        </div>
    </div>
    <!--End::Row-->
</template>

<script>
import BarChart from "@/Dashboard Widgets/BarChart.vue";
import PieChart from "@/Dashboard Widgets/PieChart.vue";
import CultserChart from "@/Dashboard Widgets/CultserChart.vue";
// Shared Colors Definition
const primary = "#6993FF";
const success = "#1BC5BD";
const info = "#8950FC";
const warning = "#FFA800";
const danger = "#F64E60";
export default {
    name: "StatsWidget",
    components: { PieChart, BarChart, CultserChart },
    data() {
        return {};
    },
};
</script>

<style scoped></style>
