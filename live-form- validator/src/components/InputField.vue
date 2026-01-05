<script setup lang="ts">

const props = defineProps<{
    label: string,
    modelValue: string,
    error: string,
    type: string
}>()

const emit = defineEmits<{
    (e: "update:modelValue", value: string): void
}>()

</script>

<template>
    <div class="input-field">
        <label>{{ label }}</label>
        <input :type="type" :value="modelValue"
            @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
        <p class="error" v-if="error" style="color:red">{{ error }}</p>

    </div>
</template>

<style scoped>
    .input-field{
        font-size: 25px;
    }
    label{
        padding-right: 10px;
        display: block;
    }
    input{
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        margin-top:5px;
        outline: none;
        border: 2px solid grey;
        font-size: 20px;
    }
    .error{
        font-size: 18px;
    }
</style>