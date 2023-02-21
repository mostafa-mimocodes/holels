<template>
    <!--Begin::Row-->
    <div class="row">
        <div class="col-xl-12">
            <bar-chart />
        </div>
        <div class="col-xl-6">
            <pie-chart />
        </div>
        <div class="col-xl-6">
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
        return {
            optionsCultser: {
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "55%",
                        endingShape: "rounded",
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"],
                },
                xaxis: {
                    categories: [
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                    ],
                },
                yaxis: {
                    title: {
                        text: "$ (thousands)",
                    },
                },
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands";
                        },
                    },
                },
                colors: [primary, success, warning],
            },
            seriesCultser: [
                {
                    name: "Net Profit",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                },
                {
                    name: "Revenue",
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                },
                {
                    name: "Free Cash Flow",
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                },
            ],
        };
    },
};
</script>

<style scoped></style>
