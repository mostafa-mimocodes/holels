<!--begin::Page Scripts(used by this page)-->
<script setup>
import BreezeButton from '@/Components/Button.vue';
import BreezeInput from '@/Components/Input.vue';
import BreezeLabel from '@/Components/Label.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import Logo from "@/components/Aside/Logo.vue";
import {onMounted, ref} from "vue";
import autoAnimate from "@formkit/auto-animate";


defineProps({
    canResetPassword: Boolean,
    status: String,
});

const loaded = ref(false)
const image = ref()

const form = useForm({
    email: '',
    password: '',
    remember: false
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};

onMounted(() => {
    loaded.value = true
    autoAnimate(image.value,{
        duration:500,
        easing:'ease-in-out'
    })

})
</script>


<template>
    <LoginLayout>
        <Head title="Log in" />

<!--        <BreezeValidationErrors class="mb-4" />-->

<!--        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">-->
<!--            {{ status }}-->
<!--        </div>-->

        <div class="d-flex flex-column flex-root vh-100">
            <!--begin::Login-->
            <div class="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
                <!--begin::Aside-->
                <div class="login-aside d-flex flex-column flex-row-auto min-w-50" style="background-color: #064a86;">
                    <!--begin::Aside Top-->
                    <div class="d-flex flex-column-auto flex-column pt-lg-40 pt-15 align-items-center justify-content-between h-75">
                        <!--begin::Aside header-->
                        <!--end::Aside header-->
                        <!--begin::Aside title-->
                        <h3 class="font-weight-bolder text-center font-size-h4 font-size-h1-lg" style="color: #9eb8b5;">Welcome</h3>
                        <div  ref="image">
                            <logo width="300" class="mt-30" v-if="loaded" />
                        </div>
                        <!--end::Aside title-->
                    </div>
                    <!--end::Aside Top-->
                </div>
                <!--begin::Aside-->
                <!--begin::Content-->
                <div class="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
                    <!--begin::Content body-->
                    <div class="d-flex flex-column-fluid flex-center">
                        <!--begin::Signin-->
                        <div class="login-form login-signin">
                            <!--begin::Form-->
                            <form class="form" name="kt_login_signin_form" id="kt_login_signin_form"  @submit.prevent="submit" enctype="multipart/form-data">
                                <!--begin::Title-->
                                <div class="pb-13 pt-lg-0 pt-5">
                                    <h3 class="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Welcome to App</h3>
                                </div>
                                <!--begin::Title-->
                                <!--begin::Form group-->
                                <div class="form-group">
                                    <BreezeLabel for="email" value="Email" />
                                    <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />
                                </div>
                                <!--end::Form group-->
                                <!--begin::Form group-->
                                <div class="form-group">
                                    <BreezeLabel for="password" value="Password" />
                                    <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" />
                                </div>
                                <!--end::Form group-->
                                <!--begin::Action-->
                                <div class="pb-lg-0 pb-5">
                                    <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                        Forgot your password?
                                    </Link>

                                    <BreezeButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        Log in
                                    </BreezeButton>
                                </div>
                                <!--end::Action-->
                            </form>
                            <!--end::Form-->
                        </div>
                    </div>
                    <!--end::Content body-->
<!--                    &lt;!&ndash;begin::Content footer&ndash;&gt;-->
<!--                    <div class="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">-->
<!--                        <div class="text-dark-50 font-size-lg font-weight-bolder mr-10">-->
<!--                            <span class="mr-1">{{ \Carbon\Carbon::now()->year.' ©' }}</span>-->
<!--                            <a href="https://simdustry.de" target="_blank" class="text-dark-75 text-hover-primary">{{ config('app.name', 'Mimocodes') }}</a>-->
<!--                        </div>-->
<!--                        <a href="#" class="text-primary font-weight-bolder font-size-lg">Terms</a>-->
<!--                        <a href="#" class="text-primary ml-5 font-weight-bolder font-size-lg">Plans</a>-->
<!--                        <a href="#" class="text-primary ml-5 font-weight-bolder font-size-lg">Contact Us</a>-->
<!--                    </div>-->
<!--                    &lt;!&ndash;end::Content footer&ndash;&gt;-->
                </div>
                <!--end::Content-->
            </div>
            <!--end::Login-->
        </div>




<!--        <form @submit.prevent="submit">-->
<!--            <div>-->
<!--                <BreezeLabel for="email" value="Email" />-->
<!--                <BreezeInput id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus autocomplete="username" />-->
<!--            </div>-->

<!--            <div class="mt-4">-->
<!--                <BreezeLabel for="password" value="Password" />-->
<!--                <BreezeInput id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="current-password" />-->
<!--            </div>-->

<!--            <div class="block mt-4">-->
<!--                <label class="flex items-center">-->
<!--                    <BreezeCheckbox name="remember" v-model:checked="form.remember" />-->
<!--                    <span class="ml-2 text-sm text-gray-600">Remember me</span>-->
<!--                </label>-->
<!--            </div>-->

<!--            <div class="flex items-center justify-end mt-4">-->
<!--                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900">-->
<!--                    Forgot your password?-->
<!--                </Link>-->

<!--                <BreezeButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">-->
<!--                    Log in-->
<!--                </BreezeButton>-->
<!--            </div>-->
<!--        </form>-->
    </LoginLayout>
</template>


