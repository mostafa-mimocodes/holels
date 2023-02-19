<template>
    <!-- Modal-->
    <div class="modal fade" id="rolesModal" tabindex="-1" role="dialog" aria-labelledby="rolesModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="rolesModalLabel">Create New Role</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <i aria-hidden="true" class="ki ki-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <!--begin::Wizard Form-->
                    <form method="post" autocomplete="off" id="kt_form">
                        <div class="row justify-content-center">
                            <div class="col-xl-9">
                                <!--begin::Wizard Step 1-->
                                <div class="my-5 step" data-wizard-type="step-content" data-wizard-state="current">
                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label"  >Name</label>
                                        <div class="col-lg-9 col-xl-9">
                                            <input class="form-control form-control-solid form-control-lg" :class="{'border-danger is-invalid':errors.name}" v-model="formData.name" name="name" placeholder="Role Name" type="text" />
                                            <div class="invalid-feedback">{{errors.name}}</div>
                                        </div>
                                    </div>
                                    <!--end::Group-->
                                    <!--begin::Group-->
                                    <div class="form-group row" >
                                        <label class="col-xl-3 col-lg-3 col-form-label"  >Description</label>
                                        <div class="col-lg-9 col-xl-9">
                                            <textarea class="form-control form-control-solid form-control-lg " :class="{'border-danger is-invalid':errors.description}" v-model="formData.description" name="description" type="text" cols="30" rows="10"  placeholder="Role Description" ></textarea>
                                            <div class="invalid-feedback">{{errors.description}}</div>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label class="col-xl-3 col-lg-3 col-form-label">Permissions</label>
                                        <div class="col-lg-9 col-xl-9" :class="{'border-danger is-invalid':errors.permissions}">
                                            <VueMultiselect
                                                v-model="rolePermissions"
                                                :options="options"
                                                :multiple="true"
                                                :close-on-select="false"
                                                label="name"
                                                track-by="name"
                                            />

                                        </div>
                                        <div class="invalid-feedback text-center">{{errors.permissions}}</div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                    <!--end::Wizard Form-->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>
                    <button type="button" @click="submit" class="btn btn-primary font-weight-bold">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import VueMultiselect from 'vue-multiselect'
import {Inertia} from "@inertiajs/inertia";
import logo from "@/components/Aside/Logo.vue";

export default {

    name: "FormModal",
    components: { VueMultiselect },
    props:{
        permissions:Array,
        roles:Array
    },
    data () {
        return {
            formData: this.$inertia.form(
                {
                    permissions: null,
                    name:null,
                    description:null,
                }
            ),
            rolePermissions:null,
            options: this.permissions,
            role:null
        }
    },
    mounted() {
        this.emitter.on('show-edit-modal', (e) => {
            this.roles.forEach(role => {
                if(role.id == e.id){
                    this.role = role
                }
            })
            this.formData.name = this.role.name
            this.formData.description = this.role.description

            this.rolePermissions = this.role.permissions
            $('#rolesModal').modal('show');
        })
        $("#rolesModal").on("hidden.bs.modal", () => {
            this.name = null
            this.description = null
            this.rolePermissions = null
            this.role = null
        });
    },
    methods: {
        async submit(){

            if(this.rolePermissions){
                this.formData.permissions = this.rolePermissions.map(permission => {
                    return permission.id
                })
            }
            if(!this.role){
                console.log(this.formData);
                this.formData.post(this.route('roles.store'), {
                    onSuccess: () => {

                        this.emitter.emit('role added')
                        this.rolePermissions= null
                        this.formData.name=null
                        this.formData.description=null

                    }
                })

            }else{

                this.formData.patch(this.route('roles.update',this.role), {
                    onSuccess: () => {
                        $('#rolesModal').modal('hide');
                        this.emitter.emit('role-updated')
                        this.rolePermissions= null
                        this.formData.name=null
                        this.formData.description=null
                    }
                })
            }


        }
    },
    computed: {
        errors(){
            return this.$page.props.errors
        }
    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>

