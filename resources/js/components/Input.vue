<script setup>
import { onMounted, ref } from 'vue';

defineProps(['modelValue']);

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
</script>

<template>
    <input class="form-control form-control-solid h-auto py-6 px-6 rounded-lg" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>
