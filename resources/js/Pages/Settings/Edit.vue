<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <portal to="subHeader">
            <div class="subheader py-2 py-lg-6 subheader-solid" id="kt_subheader">
            <div class="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div class="d-flex align-items-center flex-wrap mr-1">
                    <div class="d-flex align-items-baseline flex-wrap mr-5">
                        <h5 class="text-dark font-weight-bold my-1 mr-5">Application Settings</h5>
                        <ul class="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm">
                            <li class="breadcrumb-item">
                                <div class="text-muted"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </portal>

        <div class="container-fluid my-10">
            <div class="row">
                <div class="col-xl-12 order-xl-1">
                    <div class="card">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Application Settings</h3>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <form method="post" id="kt_form" action=""  enctype="multipart/form-data" autocomplete="off">
                                <div class="pl-lg-4">
                                    <!--begin::Group-->
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label text-left">Logo</label>
                                        <div class="col-lg-9 col-xl-9">
                                            <div class="image-input image-input-outline w-120px" style="background-size: contain" id="kt_logo_edit">
                                                <div class="image-input-wrapper w-auto"  id="output"></div>
                                                <label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
                                                    <i class="fa fa-pen icon-sm text-muted"></i>
                                                    <input type="file" name="logo_img"  @input="imageInput($event,'logo')" class="w-100" accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="profile_avatar_remove" />
                                                </label>
                                                <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" @click="cancel('logo')" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
																							<i class="ki ki-bold-close icon-xs text-muted"></i>
																						</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end::Group-->

                                    <!--begin::Group-->
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label text-left">Favicon</label>
                                        <div class="col-lg-9 col-xl-9">
                                            <div class="image-input image-input-outline w-120px" style="background-size: contain" id="kt_favicon_edit">
                                                <div class="image-input-wrapper w-auto"  id="favoutput"></div>
                                                <label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
                                                    <i class="fa fa-pen icon-sm text-muted"></i>
                                                    <input type="file" name="favicon" @input="imageInput($event,'favicon')" class="w-100"  accept=".png, .jpg, .jpeg" />
                                                    <input type="hidden" name="profile_avatar_remove" />
                                                </label>
                                                <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" @click="cancel('favicon')"  data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
																							<i class="ki ki-bold-close icon-xs text-muted"></i>
																						</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <button @click="submitImages" style="width: 100px" type="button" class="btn btn-primary mt-4">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="card mt-8">
                        <div class="card-header">
                            <div class="row align-items-center">
                                <div class="col-8">
                                    <h3 class="mb-0">Email Settings</h3>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <form method="post" id="Email_form" action=""  enctype="multipart/form-data" autocomplete="off">
                                <div class="pl-lg-4">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group" :class="{'has-danger':errors.mail_driver}">
                                                <label class="form-control-label" for="input-mail_driver">Mail Driver</label>
                                                <input type="text" name="mail_driver" id="input-mail_driver" v-model="formData.mail_driver" class="form-control" placeholder="Mail Driver"  :class="{'is-invalid':errors.mail_driver}" autofocus>
                                                <div class="invalid-feedback">{{errors.mail_driver}}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group" :class="{'has-danger':errors.mail_host}">
                                                <label class="form-control-label" for="input-mail_host">Mail Host</label>
                                                <input type="text" name="mail_host" id="input-mail_host" :class="{'is-invalid':errors.mail_host}" v-model="formData.mail_host" class="form-control " placeholder="Mail Host"   autofocus>
                                                <div class="invalid-feedback">{{errors.mail_host}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group" :class="{'has-danger':errors.mail_port}">
                                                <label class="form-control-label"  for="input-mail_port">Mail Port</label>
                                                <input type="text" name="mail_port" id="input-mail_port" :class="{'is-invalid':errors.mail_port}" v-model="formData.mail_port" class="form-control" placeholder="Mail Port"   autofocus>
                                                <div class="invalid-feedback">{{errors.mail_port}}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group" :class="{'has-danger':errors.mail_username}">
                                                <label class="form-control-label"  for="input-mail_username">Mail username</label>
                                                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" :class="{'is-invalid':errors.mail_username}" v-model="formData.mail_username" name="mail_username" id="input-mail_username" class="form-control" placeholder="Mail username" >
                                                <div class="invalid-feedback">{{errors.mail_username}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group" :class="{'has-danger':errors.mail_password}">
                                                <label class="form-control-label"  for="input-mail_password">Mail Password</label>
                                                <input type="password" name="mail_password" id="input-mail_password" :class="{'is-invalid':errors.mail_password}" v-model="formData.mail_password" class="form-control" placeholder="Mail Password" >
                                                <div class="invalid-feedback">{{errors.mail_password}}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-control-label" for="mail_encryption">Security Type</label>
                                                <select name="mail_encryption" v-model="formData.mail_encryption" id="mail_encryption" class="form-control form-control-alternative">
                                                    <option>ssl</option>
                                                    <option>tls</option>
                                                </select>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group" :class="{'has-danger':errors.mail_from_name}">
                                        <label class="form-control-label"  for="input-mail_from_name">Mail From Name</label>
                                        <input type="text" name="mail_from_name" :class="{'is-invalid':errors.mail_from_name}" id="input-mail_from_name" v-model="formData.mail_from_name" class="form-control" placeholder="Mail From Name"   autofocus>
                                        <div class="invalid-feedback">{{errors.mail_from_name}}</div>
                                    </div>

                                    <div class="text-right">
                                        <button @click="submit" :disabled="formData.processing" style="width: 100px" type="button" class="btn btn-primary mt-4">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!--end::Content-->
</template>

<script>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";

export default {
    name: "Edit",
    layout:DashboardLayout,
    data(){
        return{
            formData:this.$inertia.form({
                mail_driver:null,
                mail_host:null,
                mail_port:null,
                mail_username:null,
                mail_password:null,
                mail_encryption:null,
                mail_from_name:null,
            }),
            formImages:this.$inertia.form(
                {
                    logo:null,
                    favicon:null
                }
            ),
        }
    },
    mounted() {
        this.editLogoJs();
        this.setImages();
        this.setValues();
        this.emitter.emit('close-open-menus')
    },
    computed: {
        settings(){
            return this.$page.props.settings;
        },
        errors(){
            return this.$page.props.errors
        }
    },
    methods: {
        editLogoJs(){
            // Metronic edit user js
            new KTImageInput('kt_logo_edit');
            new KTImageInput('kt_favicon_edit');
        },
        setValues(){
            //set form values
            this.formData.mail_driver = this.settings.mail_driver
            this.formData.mail_host = this.settings.mail_host
            this.formData.mail_port = this.settings.mail_port
            this.formData.mail_username = this.settings.mail_username
            this.formData.mail_password = this.settings.mail_password
            this.formData.mail_encryption = this.settings.mail_encryption
            this.formData.mail_from_name = this.settings.mail_from_name
        },
        setImages(){
            //apply image to tha input background
            if(this.settings.logo_img){
                $('#kt_logo_edit').css('background-color', '#1a1a27')
                $('#kt_logo_edit').css('background-image', 'url("'+this.settings.logo_img +'")')
                $('#kt_favicon_edit').css('background-color', '#1a1a27')
                $('#kt_favicon_edit').css('background-image', 'url("'+this.settings.logo_img +'")')
            }else{
                $('#kt_logo_edit').css('background-color', '#1a1a27')
                $('#kt_logo_edit').css('background-image', 'url("/img/brand/logo.svg")')
                $('#kt_favicon_edit').css('background-color', '#1a1a27')
                $('#kt_favicon_edit').css('background-image', 'url("/img/brand/logo.svg")')
            }
        },
        submit(){
            this.formData.patch(this.route('settings.update',this.settings), {
                preserveScroll: true,
            })
        },
        submitImages(){
            this.formImages.post(this.route('settings.images'), {
                preserveScroll: true,
            })
        },
        imageInput(evt,type){
            switch (type){
                case 'favicon':
                    $('#kt_favicon_edit').css('background-color', '#1a1a27')
                    $('#kt_favicon_edit').css('background-image', '')
                    this.formImages.favicon = evt.target.files[0]
                    return
                case 'logo':
                    $('#kt_logo_edit').css('background-color', '#1a1a27')
                    $('#kt_logo_edit').css('background-image', '')
                    this.formImages.logo = evt.target.files[0]
                    return
                default:
                    return
            }

        },
        cancel(type){
            $('#kt_logo_edit').css('background-color', '#1a1a27')
            switch(type){
                case 'logo':
                    $('#kt_logo_edit').css('background-image', 'url("'+this.settings.logo_img +'")')
                    return
                case 'favicon':
                    $('#kt_favicon_edit').css('background-image', 'url("'+this.settings.logo_img +'")')
                    return
                default:
                    return
            }

        }
    },
}
</script>

<style scoped>

</style>
