<template>
    <form class="form" @submit.prevent="submitEditForm" id="kt_form">
        <!--begin::Row-->
        <div class="row">
            <div class="col-xl-2"></div>
            <div class="col-xl-7 my-2">
                <!--begin::Row-->
                <div class="row">
                    <label class="col-3"></label>
                    <div class="col-9">
                        <h6 class="text-dark font-weight-bold mb-10">Customer info</h6>
                    </div>
                </div>
                <!--end::Row-->
                <!--begin::Group-->
                <div class="form-group row">
                    <label class="col-form-label col-3 text-lg-right text-left">Avatar</label>
                    <div class="col-9">
                        <div class="image-input image-input-empty image-input-outline" id="kt_user_edit_avatar" >
                            <div class="image-input-wrapper"></div>
                            <label class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title="" data-original-title="Change avatar">
                                <i class="fa fa-pen icon-sm text-muted"></i>
                                <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg"  @change="onFileChange"/>
                                <input type="hidden" name="profile_avatar_remove" />
                            </label>
                            <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
																			<i class="ki ki-bold-close icon-xs text-muted"></i>
																		</span>
                            <span class="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
																			<i class="ki ki-bold-close icon-xs text-muted"></i>
																		</span>
                        </div>
                    </div>
                </div>
                <!--end::Group-->
                <!--begin::Group-->
                <div class="form-group row">
                    <label class="col-form-label col-3 text-lg-right text-left" >Name</label>
                    <div class="col-9">
                        <div>
                            <input class="form-control form-control-lg form-control-solid " :class="{'is-invalid':errors.name}" name="name" v-model="editForm.name" type="text"  />
                            <div v-if="errors.name" class="invalid-feedback">
                                {{errors.name}}
                            </div>
                        </div>
                    </div>
                </div>
                <!--end::Group-->
                <!--begin::Group-->
                <div class="form-group row">
                    <label class="col-form-label col-3 text-lg-right text-left">Email</label>
                    <div class="col-9">
                        <div class="input-group input-group-lg input-group-solid">
                            <div class="input-group-prepend">
																				<span class="input-group-text">
																					<i class="la la-at"></i>
																				</span>
                            </div>
                            <input type="text" class="form-control form-control-lg form-control-solid" :class="{'is-invalid':errors.email}" name="email" v-model="editForm.email"  placeholder="Email" />

                        </div>


                        <span v-if="errors.email" class="form-text text-danger">{{errors.email}}
																		</span>

                        <span v-else class="form-text text-muted">Email will not be publicly displayed
																		</span>
                    </div>
                </div>
                <!--begin::Group-->
                <div class="form-group row">
                    <label class="col-form-label col-3 text-lg-right text-left">Gender</label>
                    <div class="col-9">
                        <select v-model="editForm.gender" name="gender" class="form-control form-control-lg form-control-solid">
                            <option disabled>Select Gender</option>
                            <option :selected="user ? user.gender == 'male':true" value="male" >Male</option>
                            <option :selected="user ? user.gender == 'female':false" value="female">Female</option>
                        </select>
                    </div>
                </div>
                <!--end::Group-->

                <!--begin::Group-->
                <div class="form-group row">
                    <label class="col-form-label col-3 text-lg-right text-left">Language</label>
                    <div class="col-9">
                        <select v-model="editForm.language" class="form-control form-control-lg form-control-solid">
                            <option disabled>Select Language...</option>
                            <option value="en" :selected="user ? user.language == 'en': true" >en</option>
                            <option value="ar" :selected="user ? user.language == 'ar': false" >ar</option>
                        </select>
                    </div>
                </div>
                <!--end::Group-->
                <!--begin::Group-->
                <div class="form-group row">
                    <label class="col-form-label col-3 text-lg-right text-left">Phone</label>
                    <div class="col-9">
                        <div class="input-group input-group-lg input-group-solid">
                            <div class="input-group-prepend">
																			<span class="input-group-text">
																				<i class="la la-phone"></i>
																			</span>
                            </div>
                            <input type="text" v-model="editForm.phone" class="form-control form-control-lg form-control-solid" placeholder="Phone" />
                        </div>
                        <span class="form-text text-muted">We'll never share your email with anyone else.</span>
                    </div>
                </div>
                <!--end::Group-->

                <!--begin::Group-->
                <div class="form-group row">
                    <label class="col-form-label col-3 text-lg-right text-left">Role</label>
                    <div class="col-lg-9 col-xl-9">
                        <div class="input-group input-group-solid input-group-lg">
                            <select v-model="editForm.role_id" name="role_id" id="role" class="form-control form-control-alternative">
                                <option disabled :selected="!user">Select Role</option>
                                <option :value="role.id" v-for="role in roles" :selected="user ? role.id == user.roles[0].id : false">{{ role.name }} </option>
                            </select>
                        </div>
                    </div>
                </div>

                <!--end::Group-->
            </div>

        </div>

        <!--end::Row-->
        <div class="card-footer pb-0">
            <div class="row">
                <div class="col-xl-2"></div>
                <div class="col-xl-7">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-9">
                            <button type="submit" class="btn btn-light-primary font-weight-bold">Save changes</button>
                            <button type="button" @click="cancel" class="btn btn-clean font-weight-bold">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import {Inertia} from "@inertiajs/inertia";

export default {
    name: "UserForm",
    props:{
        user:Object,
        roles:Array,
    },
    data() {
        return {
            editForm: {
                name:this.user  ? this.user.name: '',
                email:this.user  ? this.user.email: '',
                gender:this.user ? this.user.gender: 'male',
                language:this.user  ? this.user.language: 'en',
                phone:this.user  ? this.user.phone: '',
                role_id:this.user  ? this.user.roles[0].id: this.roles[0].name,
                image:null

            }
        }
    },
    mounted(){
        console.log(this.user)
        this.emitter.on('submit-form',() => {
            this.submitEditForm()
        })
        this.emitter.on('cancel-form',() => {
            this.cancel()
        })
        console.log(this.roles[0].id)
        this.editUserJS();
        //apply image to tha input background
        if(this.user && this.user.image){
            $('#kt_user_edit_avatar').css('background-image', 'url("/' + this.user.image  + '")')
        }else{
            $('#kt_user_edit_avatar').css('background-image', 'url("/media/users/default.jpg")')
        }
    },
    methods:{
        async submitEditForm(){
            // toastr.remove()
            await this.$inertia.post(this.user ? route('users.update',this.user) : route('users.store'),{
                _method:this.user ? 'put' : 'post',
                name:this.editForm.name,
                email:this.editForm.email,
                gender:this.editForm.gender,
                language:this.editForm.language,
                phone:this.editForm.phone,
                role_id:this.editForm.role_id,
                image:this.editForm.image,
            })

            this.user && this.$page.props.flash.edited.length > 0 ? toastr.success(this.$page.props.flash.edited) : null;
            this.emitter.off('submit-form');

        },
        cancel(){
            Inertia.get(route('users.cancel'));
            this.emitter.off('cancel-form')
        },
        onFileChange(e){
            this.editForm.image = e.target.files[0]
        },
        editUserJS(){
            // Metronic edit user js
            new KTImageInput('kt_user_edit_avatar');
        }
    },
    computed:{
        errors(){
            return this.$page.props.errors
        }
    }

}
</script>

<style scoped>

</style>
