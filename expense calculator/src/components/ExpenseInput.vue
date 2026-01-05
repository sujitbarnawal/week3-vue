<script setup lang="ts">
    const props = defineProps<{
        title:string,
        amount:number|null
    }>()

    const emit =defineEmits<{
        (e:'update:title',value:string):void,
        (e:'update:amount',value:number|null):void
    }>()

</script>

<template>
    <div>
    <input
      placeholder="Expense title"
      :value="title"
      @input="emit('update:title', ($event.target as HTMLInputElement).value)"
    />

    <input
      type="number"
      placeholder="Amount"
      :value="amount ?? ''"
      @input="emit('update:amount', Number(($event.target as HTMLInputElement).value) || null)"
    />
  </div>
  
  
</template>

<style scoped>
  div{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  input{
    padding: 15px;
    border-radius: 10px;
  }
</style>