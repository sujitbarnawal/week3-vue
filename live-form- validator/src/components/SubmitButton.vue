<script setup lang="ts">

    const props =defineProps<{
        disabled:boolean
    }>()

    const emit = defineEmits<{
        (e:'submit-form'):void
    }>()

</script>

<template>
    <button @click="emit('submit-form')" :disabled="disabled" :class="{ disabledBtn: disabled }" >
        Submit
    </button>
  
</template>

<style scoped>
    button{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-top: 20px;
        cursor: pointer;
        color: white;
        background:linear-gradient(135deg,blue,purple);
    }

    .disabledBtn{
        cursor: not-allowed;
    }

</style>