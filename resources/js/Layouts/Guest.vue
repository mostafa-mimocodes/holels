<script setup>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/inertia-vue3';
</script>

<template>
    <div class="min-h-100 d-flex flex-column justify-content-center align-items-center pt-6  bg-gray">
        <div>
            <Link href="/">
                <BreezeApplicationLogo class="w-25 h-25 text-gray" />
            </Link>
        </div>

        <div class="w-100 mt-6 px-6 py-4 bg-white overflow-hidden">
            <slot />
        </div>
    </div>
</template>
