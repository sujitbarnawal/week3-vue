<script setup lang="ts">
import type { Product } from '@/types/product';

const props = defineProps<{
    item: Product
}>()
const emit = defineEmits<{
    (e: 'remove-from-cart', id: number): void,
    (e: 'update-quantity', id: number): void
}>()

</script>
<template>
    <div class="cart-item">
        <span>{{ item.name }}</span>
        <span>{{ item.quantity }}</span>
        <button style="font-size: 20px;font-weight: bolder;" @click="emit('update-quantity',item.id)">+</button>
        <span>Rs.{{ item.price * item.quantity }}</span>
        <button @click="emit('remove-from-cart',props.item.id)">🗑️</button>
    </div>
</template>
<style scoped>
    .cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}
input {
  width: 50px;
  text-align: center;
}
button {
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>