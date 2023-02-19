<template>
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Subheader-->
        <portal to="subHeader">
            <sub-header page-title="Users">
            <template #action-buttons>
                <!--begin::Separator-->
                <div class="subheader-separator subheader-separator-ver mt-2 mb-2 mr-5 bg-gray-200"></div>
                <!--end::Separator-->
                <!--begin::Search Form-->
                <div class="d-flex align-items-center" id="kt_subheader_search">
                    <span class="text-dark-50 font-weight-bold" id="kt_subheader_total">{{ total }} Total</span>
                    <form class="ml-5">
                        <div class="input-group input-group-sm input-group-solid" style="max-width: 175px">
                            <input type="text" class="form-control" id="kt_subheader_search_form"
                                   placeholder="Search..."/>
                            <div class="input-group-append">
													<span class="input-group-text">
														<span class="svg-icon">
															<!--begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg-->
															<svg xmlns="http://www.w3.org/2000/svg"
                                                                 xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                                                 height="24px" viewBox="0 0 24 24" version="1.1">
																<g stroke="none" stroke-width="1" fill="none"
                                                                   fill-rule="evenodd">
																	<rect x="0" y="0" width="24" height="24"/>
																	<path
                                                                        d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                                                        fill="#000000" fill-rule="nonzero"
                                                                        opacity="0.3"/>
																	<path
                                                                        d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                                                        fill="#000000" fill-rule="nonzero"/>
																</g>
															</svg>
                                                            <!--end::Svg Icon-->
														</span>
                                                        <!--<i class="flaticon2-search-1 icon-sm"></i>-->
													</span>
                            </div>
                        </div>
                    </form>
                </div>
                <!--end::Search Form-->
            </template>

            <inertia-link :href="route('users.create')"
                          class="btn btn-light-primary font-weight-bold btn-sm px-4 font-size-base ml-2">Add User
            </inertia-link>

        </sub-header>
        </portal>

        <!--begin::Entry-->
        <div class="d-flex flex-column-fluid">
            <!--begin::Container-->
            <div class="container">
                <!--begin::Card-->
                <div class="card card-custom">
                    <!--begin::Header-->
                    <div class="card-header flex-wrap border-0 pt-6 pb-0">
                        <div class="card-title">
                            <h3 class="card-label">User Management
                                <span class="d-block text-muted pt-2 font-size-sm">User management made easy</span></h3>
                        </div>
                        <div class="card-toolbar">
                            <!--begin::Dropdown-->
                            <div class="dropdown dropdown-inline mr-2">
                                <button type="button" class="btn btn-light-primary font-weight-bolder dropdown-toggle"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												<span class="svg-icon svg-icon-md">
													<!--begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg-->
													<svg xmlns="http://www.w3.org/2000/svg"
                                                         xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                                         height="24px" viewBox="0 0 24 24" version="1.1">
														<g stroke="none" stroke-width="1" fill="none"
                                                           fill-rule="evenodd">
															<rect x="0" y="0" width="24" height="24"/>
															<path
                                                                d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z"
                                                                fill="#000000" opacity="0.3"/>
															<path
                                                                d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z"
                                                                fill="#000000"/>
														</g>
													</svg>
                                                    <!--end::Svg Icon-->
												</span>Export
                                </button>
                                <!--begin::Dropdown Menu-->
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                    <!--begin::Navigation-->
                                    <ul class="navi flex-column navi-hover py-2">
                                        <li class="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">
                                            Choose an option:
                                        </li>
                                        <li class="navi-item">
                                            <a :href="route('users.export',{type:'excel'})" class="navi-link">
																<span class="navi-icon">
																	<i class="la la-file-excel-o"></i>
																</span>
                                                <span class="navi-text">Excel</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a :href="route('users.export',{type:'csv'})" class="navi-link">
																<span class="navi-icon">
																	<i class="la la-file-text-o"></i>
																</span>
                                                <span class="navi-text">CSV</span>
                                            </a>
                                        </li>
                                        <li class="navi-item">
                                            <a :href="route('users.export',{type:'pdf'})" class="navi-link">
																<span class="navi-icon">
																	<i class="la la-file-pdf-o"></i>
																</span>
                                                <span class="navi-text">PDF</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <!--end::Navigation-->
                                </div>
                                <!--end::Dropdown Menu-->
                            </div>
                            <!--end::Dropdown-->
                            <!--begin::Button-->
                            <inertia-link :href="route('users.create')" class="btn btn-primary font-weight-bolder">
											<span class="svg-icon svg-icon-md">
												<!--begin::Svg Icon | path:assets/media/svg/icons/Design/Flatten.svg-->
												<svg xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                                                     height="24px" viewBox="0 0 24 24" version="1.1">
													<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
														<rect x="0" y="0" width="24" height="24"/>
														<circle fill="#000000" cx="9" cy="15" r="6"/>
														<path
                                                            d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z"
                                                            fill="#000000" opacity="0.3"/>
													</g>
												</svg>
                                                <!--end::Svg Icon-->
											</span>New Record
                            </inertia-link>
                        </div>
                    </div>
                    <!--end::Header-->
                    <!--begin::Body-->
                    <div class="card-body">
                        <!--begin: Datatable-->
                        <div class="datatable datatable-bordered datatable-head-custom" id="kt_datatable"></div>
                        <!--end: Datatable-->
                    </div>
                    <!--end::Body-->
                </div>
                <!--end::Card-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Entry-->
    </div>
</template>

<script>
import DashboardLayout from "@/Layouts/DashboardLayout.vue";
import {Inertia} from "@inertiajs/inertia";
import FormModal from "@/Pages/Roles/FormModal.vue";
import SubHeader from "@/Shared/SubHeader.vue";

export default {
    name: 'Index',
    components: {SubHeader, FormModal},
    layout: DashboardLayout,
    props: {
        usersTotal: {
            default: 0
        },

    },
    data() {
        return {
            datatable: null,
            total: this.usersTotal
        }
    },

    mounted() {
        $('#kt_datatable').on('datatable-on-ajax-done', (e, data) => {
            // this.total = meta.total;
        })
        this.datatable = this.KTAppsUsersListDatatable()

        setTimeout(() => {
            $('#kt_datatable').on('click', '.edit', (e) => {
                e.preventDefault()
                const id = $(e.target).closest('a').attr('id')
                Inertia.visit('/users/' + id + '/edit')
            })
            $('#kt_datatable').on('click', '.delete', async (e) => {
                e.preventDefault()
                const id = $(e.target).closest('a').attr('id')
                await Inertia.visit('/users/' + id, {
                    method: 'delete'
                })
                toastr.info(this.$page.props.flash.deleted);
            })


        }, 1000)

        this.emitter.emit('close-open-menus')
    },
    methods: {
        KTAppsUsersListDatatable() {
            const datatable = $('#kt_datatable').KTDatatable({
                // datasource definition
                data: {
                    type: 'remote',
                    source: {
                        read: {
                            url: BASE_URL + 'all-users',
                            method: "GET",
                        },
                    },
                    pageSize: 10, // display 20 records per page
                    serverPaging: true,
                    serverFiltering: true,
                    serverSorting: true,
                },

                // layout definition
                layout: {
                    scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                    footer: false, // display/hide footer
                },

                // column sorting
                sortable: true,

                pagination: true,

                search: {
                    input: $('#kt_subheader_search_form'),
                    delay: 400,
                    key: 'generalSearch',

                },


                // columns definition
                columns: [
                    {
                        field: 'count',
                        title: '#',
                        sortable: false,
                        width: 40,
                        type: 'number',
                        selector: false,
                        textAlign: 'left',

                        template: function (data, index) {
                            return '<span class="font-weight-bolder">' + (index + 1) + '</span>';
                        }
                    }, {
                        field: 'name',
                        title: 'User',
                        width: 250,
                        template: function (data) {
                            var output = '';
                            if (data.image) {

                                output = '<div class="d-flex align-items-center">\
								<div class="symbol symbol-40 symbol-sm flex-shrink-0">\
									<img class="" src="' + data.image + '" alt="photo">\
								</div>\
								<div class="ml-4">\
									<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + data.name + '</div>\
								</div>\
							</div>';

                            } else {
                                var state = 'primary';

                                output = '<div class="d-flex align-items-center">\
								<div class="symbol symbol-40 symbol-light-' + state + ' flex-shrink-0">\
									<span class="symbol-label font-size-h4 font-weight-bold">' + data.name.substring(0, 1) + '</span>\
								</div>\
								<div class="ml-4">\
									<div class="text-dark-75 font-weight-bolder font-size-lg mb-0">' + data.name + '</div>\
								</div>\
							</div>';
                            }

                            return output;
                        }
                    }, {
                        field: 'email',
                        title: 'Email',
                        width: 250,
                        template: function (row) {
                            var output = '';

                            output += '<div class="font-weight-bolder font-size-lg mb-0">' + row.email + '</div>';

                            return output;
                        }
                    }, {
                        field: 'roles',
                        sortable: false,
                        title: 'Role',
                        template: function (row) {
                            var output = '';

                            output += '<div class="font-weight-bolder font-size-lg mb-0">' + row.roles[0].name + '</div>';

                            return output;
                        }
                    }, {
                        field: 'created_at',
                        title: 'Created Date',
                        type: 'date',
                        format: 'MM/DD/YYYY',
                        template: function (row) {
                            var output = '';

                            var status = {
                                1: {'title': 'Paid', 'class': ' label-light-primary'},
                                2: {'title': 'Approved', 'class': ' label-light-danger'},
                                3: {'title': 'Pending', 'class': ' label-light-primary'},
                                4: {'title': 'Rejected', 'class': ' label-light-success'}
                            };
                            const date = new Date(row.created_at);
                            const options = {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'};

                            output += '<div class="font-weight-bolder text-primary mb-0">' + date.toLocaleDateString('en-US', options) + '</div>';

                            return output;
                        },
                    }, {
                        field: 'gender',
                        title: 'Gender',
                        width: 90,
                        template: function (row) {
                            var output = '';

                            output += '<div class="font-weight-bold text-muted">' + row.gender + '</div>';

                            return output;
                        }
                    }, {
                        field: 'Actions',
                        title: 'Actions',
                        sortable: false,
                        overflow: 'visible',
                        autoHide: false,
                        template: function (data) {


                            return `\
	                        <a id="${data.id}" class="edit btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon mr-2" title="Edit details">\
	                            <span class="svg-icon svg-icon-md">\
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
										<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
											<rect x="0" y="0" width="24" height="24"/>\
											<path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "/>\
											<path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"/>\
										</g>\
									</svg>\
	                            </span>\
	                        </a>\
	                        <a  id="${data.id}" class="delete btn btn-sm btn-default btn-text-primary btn-hover-primary btn-icon" title="Delete">\
								<span class="svg-icon svg-icon-md">\
									<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
										<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
											<rect x="0" y="0" width="24" height="24"/>\
											<path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fill-rule="nonzero"/>\
											<path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3"/>\
										</g>\
									</svg>\
								</span>\
	                        </a>\
	                    `;
                        },
                    }],

            });

            $('#kt_datatable_search_status').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Status');
            });

            $('#kt_datatable_search_type').on('change', function () {
                datatable.search($(this).val().toLowerCase(), 'Type');

            });

            $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();


            return datatable;
        }
    }


};
</script>

<style scoped>

</style>
