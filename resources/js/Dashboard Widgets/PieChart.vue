<template>
    <div class="card card-custom gutter-b">
        <div class="card-header">
            <div class="card-title">
                <h3 class="card-label">Reservation Status</h3>
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
                ref="pieChart"
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
            status: [],
            bookings: [],
            pieSeries: [],
            from: "2015-06-26",
            to: "2016-04-09",
            pieOptions: {
                chart: {
                    type: "pie",
                },
                labels: [],
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
    mounted() {
        this.sendRequest();
    },
    methods: {
        async sendRequest() {
            await axios
                .get(this.route("chart.data"), {
                    params: { chart: "pie", from: this.from, to: this.to },
                })
                .then((res) => {
                    this.bookings = res.data.bookings;
                    this.status = res.data.status;
                    this.pieSeries = this.bookings;
                    this.updateSeriesLine();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        updateSeriesLine() {
            this.$refs.pieChart.updateOptions({
                labels: this.status,
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
};
</script>

<style scoped></style>
