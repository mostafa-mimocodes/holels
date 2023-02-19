<script setup>
defineProps(['value']);
</script>

<template>
    <label class="font-size-h6 font-weight-bolder text-dark">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </label>
</template>
