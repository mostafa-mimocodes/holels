<template>
    <div class="card card-custom card-stretch card-stretch-half gutter-b">
        <!--begin::Body-->
        <div class="card-body p-0">
                <slot/>
                    <apexchart class="card-rounded-bottom"  type="area" height="150" :options="options" :series="series"></apexchart>
          </div>
        <!--end::Body-->
    </div>
</template>

<script>
export default {
    name: "Widget2",
    data(){
        return{
            options: {
                chart: {
                    type: 'area',
                    height: 150,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [KTAppSettings['colors']['theme']['base'][this.color]]
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: KTAppSettings['colors']['gray']['gray-500'],
                            fontSize: '12px',
                            fontFamily: KTAppSettings['font-family']
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: KTAppSettings['colors']['gray']['gray-300'],
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px',
                            fontFamily: KTAppSettings['font-family']
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 55,
                    labels: {
                        show: false,
                        style: {
                            colors: KTAppSettings['colors']['gray']['gray-500'],
                            fontSize: '12px',
                            fontFamily: KTAppSettings['font-family']
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px',
                        fontFamily: KTAppSettings['font-family']
                    },
                    y: {
                        formatter: function (val) {
                            return "$" + val + " thousands"
                        }
                    }
                },
                colors: [KTAppSettings['colors']['theme']['light'][this.color]],
                markers: {
                    colors: [KTAppSettings['colors']['theme']['light'][this.color]],
                    strokeColor: [KTAppSettings['colors']['theme']['base'][this.color]],
                    strokeWidth: 3
                }
            },
            series: [{
                name: 'Net Profit',
                data: [40, 40, 30, 30, 35, 35, 50]
            }],
        }
    },
    props:{
        color:{
            type:String,
            default : "success"
        }
    },
    mounted() {
        setInterval(()=>{
            this.updateArray()
        },5000)
    },
    methods:{
        updateArray() {
            this.series= [{
                name: 'Net Profit',
                data: this.randomArray(7,50)
            }]
        },
        randomArray(length, max) {
            return Array.apply(null, Array(length)).map(function() {
                return Math.round(Math.random() * max);
            });
        }
    }
}
</script>

<style scoped>

</style>
