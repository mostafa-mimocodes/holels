<template>
    <!--begin::List Widget 9-->
    <div class="card card-custom card-stretch gutter-b">
        <!--begin::Header-->
        <div class="card-header align-items-center border-0 mt-4">
            <h3 class="card-title align-items-start flex-column">
                <span class="font-weight-bolder text-dark">My Activity</span>
                <span class="text-muted mt-3 font-weight-bold font-size-sm">890,344 Sales</span>
            </h3>
            <div class="card-toolbar">
                <div class="dropdown dropdown-inline">
                    <a href="#" class="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="ki ki-bold-more-hor"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-md dropdown-menu-right">
                        <!--begin::Navigation-->
                        <ul class="navi navi-hover">
                            <li class="navi-header font-weight-bold py-4">
                                <span class="font-size-lg">Choose Label:</span>
                                <i class="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..."></i>
                            </li>
                            <li class="navi-separator mb-3 opacity-70"></li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-success">Customer</span>
																		</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-danger">Partner</span>
																		</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-warning">Suplier</span>
																		</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-primary">Member</span>
																		</span>
                                </a>
                            </li>
                            <li class="navi-item">
                                <a href="#" class="navi-link">
																		<span class="navi-text">
																			<span class="label label-xl label-inline label-light-dark">Staff</span>
																		</span>
                                </a>
                            </li>
                            <li class="navi-separator mt-3 opacity-70"></li>
                            <li class="navi-footer py-4">
                                <a class="btn btn-clean font-weight-bold btn-sm" href="#">
                                    <i class="ki ki-plus icon-sm"></i>Add new</a>
                            </li>
                        </ul>
                        <!--end::Navigation-->
                    </div>
                </div>
            </div>
        </div>
        <!--end::Header-->
        <!--begin::Body-->
        <div class="card-body pt-4">
            <!--begin::Timeline-->
            <div class="timeline timeline-6 mt-3">
                <!--begin::Item-->
                <div class="timeline-item align-items-start" v-for="el in timeline" :key="el.id">
                    <!--begin::Label-->
                    <div class="timeline-label font-weight-bolder text-dark-75 font-size-lg">{{el.time}}</div>
                    <!--end::Label-->
                    <!--begin::Badge-->
                    <div class="timeline-badge">
                        <i class="fa fa-genderless  icon-xl" :class="`text-${el.badge}`"></i>
                    </div>
                    <!--end::Badge-->
                    <!--begin::Text-->
                    <div class="font-weight-mormal font-size-lg timeline-content pl-3">{{el.body}}</div>
                    <!--end::Text-->
                </div>
                <!--end::Item-->
                <!--end::Item-->
            </div>
            <!--end::Timeline-->
        </div>
        <!--end: Card Body-->
    </div>
    <!--end: List Widget 9-->
</template>

<script>
export default {
    name: "ListWidget",
    data(){
        return{
            timeline:[
                {badge:'warning',body:'AEOL meeting',id:1,time:this.generateRandomTime(8)},
                {badge:'success',body:'Make deposit USD 700. to ESL',id:2,time:this.generateRandomTime(6)},
                {badge:'danger',body:'New order placed',id:3,time:this.generateRandomTime(5)},
            ],
            date:null
        }
    },
    mounted() {
        setInterval(() => {
            this.generateTimeLine()
        },5000)
    },
    methods:{
        generateRandomTime(h){
            let rand = Math.floor(Math.random() * 60);
            const today = this.subtractHours(h)
            const date = this.subtractMinutes(rand,today)
            return `${this.padTo2Digits(date.getHours())}:${this.padTo2Digits(date.getMinutes())}`
        },
        subtractHours(numOfHours, date = new Date()) {
            date.setHours(date.getHours() - numOfHours);

            return date;
        },
        subtractMinutes(numOfMinutes, date= new Date()) {
            date.setMinutes(date.getMinutes() - numOfMinutes);

            return date;
        },
        padTo2Digits(num) {
            return String(num).padStart(2, '0');
        },
        generateTimeLine(){
            const arrayLength = this.timeline.length
            let newId = this.timeline[arrayLength - 1].id + 1
            let numOfHours = 5
            numOfHours -= 1.5
            const badges = ['primary','warning','danger','success','info','secondary']
            const body = ['New order placed','New User Added','New Role Created','Settings Updated']
            const randomBadgeKey = Math.floor(Math.random() * badges.length);
            const randomBodyKey = Math.floor(Math.random() * body.length);
            if(this.timeline.length < 9){
                this.timeline.push({id:newId,badge:badges[randomBadgeKey],body: body[randomBodyKey],time: this.generateRandomTime(numOfHours)})
            }else{
                setTimeout(() => {
                    this.timeline = [
                        {badge:'warning',body:'AEOL meeting',id:1,time:this.generateRandomTime(8)},
                        {badge:'success',body:'Make deposit USD 700. to ESL',id:2,time:this.generateRandomTime(6)},
                        {badge:'danger',body:'New order placed',id:3,time:this.generateRandomTime(5)},
                    ]
                },10000)
            }
        }
    }
}
</script>

<style scoped>

</style>
