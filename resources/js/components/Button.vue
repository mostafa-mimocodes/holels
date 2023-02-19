<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
});
</script>

<template>
    <button :type="type" class="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">
        <slot />
    </button>
</template>
