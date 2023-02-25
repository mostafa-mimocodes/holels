<template>
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Count of visitors</h3>
            </div>
            <div class="div card-toolbar justify-content-between">
                <div class="form-group row mb-0 mr-4">
                    <label for="example-date-input" class="col-3 col-form-label"
                        >From</label
                    >
                    <div class="col-9">
                        <input
                            class="form-control"
                            type="date"
                            id="example-date-input"
                            v-model="from"
                            @change="handleDateChange"
                        />
                    </div>
                </div>
                <div class="form-group row mb-0">
                    <label for="example-date-input" class="col-3 col-form-label"
                        >To</label
                    >
                    <div class="col-9">
                        <input
                            class="form-control"
                            type="date"
                            id="example-date-input"
                            v-model="to"
                            @change="handleDateChange"
                        />
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
</template>

<script>
// Shared Colors Definition
const primary = "#6993FF";
const success = "#1BC5BD";
const warning = "#FFA800";

export default {
    name: "CultserChart",
    data() {
        return {
            data: [],
            from: "2015-06-26",
            to: "2016-04-09",
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
                    categories: [],
                },
                yaxis: {
                    title: {
                        text: "No of visitors",
                    },
                },
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
                colors: [primary, success, warning],
            },
            series: [],
        };
    },
    mounted() {
        this.sendRequest();
    },
    methods: {
        async sendRequest() {
            await axios
                .get(this.route("chart.data"), {
                    params: { chart: "cluster", from: this.from, to: this.to },
                })
                .then((res) => {
                    this.data = res.data;
                    this.updateSeriesLine();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateSeriesLine() {
            this.$refs.barChart.updateSeries(this.data, false, true);
            this.$refs.barChart.updateOptions({
                xaxis: {
                    categories: [this.dateRangeString],
                },
            });
        },
        handleDateChange() {
            const from = new Date(this.from);
            const to = new Date(this.to);

            if (from > to) {
                from.setDate(to.getDate() - 1);
                from.setMonth(to.getMonth());
                from.setFullYear(to.getFullYear());
                this.from = this.format(from);
            }

            this.sendRequest();
        },
        format(inputDate) {
            let date, month, year;

            date = inputDate.getDate();
            month = inputDate.getMonth() + 1;
            year = inputDate.getFullYear();

            date = date.toString().padStart(2, "0");

            month = month.toString().padStart(2, "0");

            return `${year}-${month}-${date}`;
        },
    },
    computed: {
        dateRangeString() {
            return `From ${this.from} to ${this.to}`;
        },
    },
};
</script>

<style scoped></style>
