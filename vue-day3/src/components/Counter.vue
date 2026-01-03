<script setup>
import { ref } from 'vue';

    const emit=defineEmits(['update'])
    const count =ref(0)
    const increment =()=>{
        count.value++
        emit('update',count.value)
    }
</script>
<template>
    <button @click="increment">Increment(+)</button>
</template>
<style setup></style>