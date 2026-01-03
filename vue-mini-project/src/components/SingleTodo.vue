<script setup>
    const props=defineProps({
        todo:Object
    })

    const emit=defineEmits(['remove'])

    

</script>

<template>
    <div>
        <p>{{ todo.todo }}</p>
        <button @click="emit('remove')">❌</button>
    </div>

</template>

<style scoped>

</style>