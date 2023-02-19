<template>
    <!--begin::Content-->
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->
        <portal to="subHeader">
            <sub-header page-title="Create User">
            <div class="btn-group ml-2">
                <inertia-link as="button" class="btn btn-light-primary font-weight-bold btn-sm px-3 font-size-base">Save changes</inertia-link>
            </div>
            <div class="btn-group ml-2">
                <inertia-link @click="cancel" class="btn btn-default font-weight-bold btn-sm px-3 font-size-base">Cancel</inertia-link>
            </div>
        </sub-header>
        </portal>

        <!--end::Subheader-->
        <!--begin::Entry-->
        <div class="d-flex flex-column-fluid">
            <!--begin::Container-->
            <div class="container">
                <!--begin::Card-->
                <div class="card card-custom">
                    <!--begin::Card body-->
                    <div class="card-body">


                            <div class="tab-pane show active px-7" id="kt_user_edit_tab_1" role="tabpanel">
                                <user-form  :roles="roles" />
                            </div>



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
import UserForm from "@/components/UserForm.vue";
import SubHeader from "@/Shared/SubHeader.vue";

export default {
    name: "Create",
    components: {SubHeader, UserForm},
    layout: DashboardLayout,
    props: {
        roles:Array
    },
    mounted() {
        this.emitter.emit('close-open-menus')
    },
    methods:{
        cancel() {
            this.emitter.emit('cancel-form')
        }
    }
}
</script>

<style scoped>

</style>
