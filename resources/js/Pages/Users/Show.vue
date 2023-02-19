<template>
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->

        <portal to="subHeader">
            <sub-header page-title="Profile">
                <div class="btn-group ml-2">
                    <inertia-link :href="route('users.edit',{user})" class="btn btn-primary font-weight-bold btn-sm px-3 font-size-base">Edit Profile</inertia-link>
                </div>
            </sub-header>
        </portal>


        <!--begin::Entry-->
        <div class="d-flex flex-column-fluid">
            <!--begin::Container-->
            <div class="container">
                <!--begin::Card-->
                <div class="card card-custom">
                    <!--begin::Card header-->
                    <div class="card-header card-header-tabs-line nav-tabs-line-3x">
                        <!--begin::Toolbar-->
                        <div class="card-toolbar">
                            <ul class="nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-3x">
                                <!--begin::Item-->
                                <li class="nav-item mr-3">
                                    <a class="nav-link active" data-toggle="tab" href="#kt_user_edit_tab_1">
														<span class="nav-icon">
															<span class="svg-icon">
																<!--begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg-->
																<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
																	<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
																		<polygon points="0 0 24 0 24 24 0 24" />
																		<path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fill-rule="nonzero" />
																		<path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
																	</g>
																</svg>
                                                                <!--end::Svg Icon-->
															</span>
														</span>
                                        <span class="nav-text font-size-lg">Profile</span>
                                    </a>
                                </li>
                                <!--end::Item-->
                            </ul>
                        </div>
                        <!--end::Toolbar-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body">
                        <form class="form" method="post" action="#"  enctype="multipart/form-data" id="kt_form">

                            <div class="tab-content">
                                <!--begin::Tab-->
                                <div class="tab-pane show active px-7" id="kt_user_edit_tab_1" role="tabpanel">
                                    <!--begin::Row-->
                                    <div class="row">
                                        <div class="col-xl-2"></div>
                                        <div class="col-xl-7 my-2">
                                            <!--begin::Row-->
                                            <div class="row">
                                                <label class="col-3"></label>
                                                <div class="col-9">
                                                    <h6 class="text-dark font-weight-bold mb-10">Info</h6>
                                                </div>
                                            </div>
                                            <!--end::Row-->
                                            <!--begin::Group-->
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-lg-3 col-form-label">Avatar</label>
                                                <div class="col-9">
                                                    <div class="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                                                        <div class="symbol-label" id="kt_user_edit_avatar" ></div>
                                                        <i class="symbol-badge bg-success"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--end::Group-->

                                            <!--begin::Group-->
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-lg-3 col-form-label">Name</label>
                                                <div class="col-lg-9 col-xl-9">
                                                    <input :value="user.name" disabled class="form-control  form-control-solid form-control-lg" name="name" type="text"/>
                                                </div>
                                            </div>
                                            <!--end::Group-->
                                            <!--begin::Group-->
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-lg-3 col-form-label">Phone</label>
                                                <div class="col-lg-9 col-xl-9">
                                                    <div class="input-group input-group-solid input-group-lg">
                                                        <div class="input-group-prepend">
																							<span class="input-group-text">
																								<i class="la la-phone"></i>
																							</span>
                                                        </div>
                                                        <input :value="user.phone" disabled type="text" class="form-control form-control-solid form-control-lg" name="phone"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <!--end::Group-->
                                            <!--begin::Group-->
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-lg-3 col-form-label">Email</label>
                                                <div class="col-lg-9 col-xl-9">
                                                    <div class="input-group input-group-solid input-group-lg">
                                                        <div class="input-group-prepend">
																							<span class="input-group-text">
																								<i class="la la-at"></i>
																							</span>
                                                        </div>
                                                        <input  :value="user.email" disabled type="text" class="form-control form-control-solid form-control-lg" name="email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <!--end::Group-->
                                            <!--begin::Group-->
                                            <div class="form-group row">
                                                <label class="col-xl-3 col-lg-3 col-form-label">Gender</label>
                                                <div class="col-lg-9 col-xl-9">
                                                    <div class="input-group input-group-solid input-group-lg">
                                                        <input  :value="user.gender" disabled type="text" class="form-control form-control-solid form-control-lg" name="gender" />

                                                    </div>
                                                </div>
                                            </div>
                                            <!--end::Group-->


                                            <div class="form-group row">
                                                <label class="col-xl-3 col-lg-3 col-form-label">Language</label>
                                                <div class="col-9">
                                                    <div>
                                                        <span class="form-control form-control-lg form-control-solid">{{ user.language }}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="form-group text-center" >
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <!--end::Tab-->
                            </div>

                        </form>
                    </div>
                    <!--begin::Card body-->
                </div>
                <!--end::Card-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Entry-->
    </div>
    <!--end::Content-->
</template>

<script>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import SubHeader from "@/Shared/SubHeader.vue";


export default {
    name: "Show",
    components: {SubHeader},
    layout:DashboardLayout,
    props:{
        user:Object
    },
    mounted() {
        //apply image to tha input background
        if(this.user.image){
            $('#kt_user_edit_avatar').css('background-image', 'url("/' + this.user.image  + '")')
        }else{
            $('#kt_user_edit_avatar').css('background-image', 'url("/media/users/default.jpg")')
        }

        if(this.$page.props.flash.edited && this.$page.props.flash.edited.length != 0){
            toastr.success(this.$page.props.flash.edited);
        }

        this.emitter.emit('close-open-menus')


    },
}
</script>

<style scoped>

</style>
