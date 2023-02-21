<template>
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Column Chart</h3>
            </div>
        </div>
        <div class="card-body">
            <!--begin::Chart-->
            <apexchart
                height="250"
                type="pie"
                :options="pieOptions"
                :series="pieSeries"
            ></apexchart>
            <!--end::Chart-->
        </div>
    </div>
</template>

<script>
// Shared Colors Definition
const primary = "#6993FF";
const success = "#1BC5BD";
const info = "#8950FC";
const warning = "#FFA800";
const danger = "#F64E60";
export default {
    name: "PieChart",
    data() {
        return {
            pieSeries: [44, 55, 13, 43, 22],

            pieOptions: {
                chart: {
                    width: 380,
                    type: "pie",
                },
                labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
                colors: [primary, success, warning, danger, info],
            },
        };
    },
};
</script>

<style scoped></style>
