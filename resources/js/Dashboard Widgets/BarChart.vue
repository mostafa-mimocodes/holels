<template>
    <!--Begin::Row-->
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Column Chart</h3>
            </div>
            <div class="card-toolbar">
                <div
                    class="dropdown dropdown-inline"
                    data-toggle="tooltip"
                    title="Quick actions"
                    data-placement="left"
                >
                    <a
                        href="#"
                        class="btn btn-light-primary"
                        data-toggle="dropdown"
                    >
                        {{ selectedMonth }}
                    </a>
                    <div
                        class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right"
                    >
                        <!--begin::Navigation-->
                        <ul class="navi navi-hover">
                            <li class="navi-item">
                                <a
                                    href="#"
                                    v-for="month in months"
                                    :key="month"
                                    class="navi-link"
                                    :class="{
                                        active: selectedMonth == month,
                                    }"
                                    @click="handleMonthSelect(month)"
                                >
                                    {{ month }}
                                </a>
                            </li>
                        </ul>
                        <!--end::Navigation-->
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <!--begin::Chart-->
            <apexchart
                ref="barChart"
                height="250"
                type="bar"
                :options="options"
                :series="series"
            ></apexchart>
            <!--end::Chart-->
        </div>
    </div>
    <!--End::Row-->
</template>

<script>
import axios from "axios";
// Shared Colors Definition
const success = "#1BC5BD";

export default {
    name: "BarChart",
    data() {
        return {
            selectedMonth: "January",
            months: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            days: [],
            bookings: [],
            options: {
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
                        text: "no of bookings",
                    },
                },
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return +val + " Bookings";
                        },
                    },
                },
                colors: [success],
            },
            series: [
                {
                    name: "Bookings",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                },
            ],
        };
    },
    mounted() {
        this.sendRequest();
    },
    methods: {
        handleMonthSelect(month) {
            this.selectedMonth = month;
            this.sendRequest();
        },
        async sendRequest() {
            await axios
                .get(this.route("chart.data"), {
                    params: { month: this.selectedMonth },
                })
                .then((res) => {
                    console.log(res);
                    this.bookings = res.data.bookings;
                    this.days = res.data.days;
                    this.updateSeriesLine();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateSeriesLine() {
            this.$refs.barChart.updateSeries(
                [
                    {
                        data: this.bookings,
                    },
                ],
                false,
                true
            );
            this.$refs.barChart.updateOptions({
                xaxis: {
                    categories: this.days, //ie ["a","b","c","d"]
                },
            });
        },
    },
};
</script>

<style scoped></style>
