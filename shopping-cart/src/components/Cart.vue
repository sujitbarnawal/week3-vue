<script setup lang="ts">
import type { Product } from "@/types/product";
import CartItem from "./CartItem.vue";

const props = defineProps<{
  cart: Product[];
  total: number;
}>();
const emit = defineEmits<{
  (e: "remove-from-cart", id: number): void;
  (e: "update-quantity", id: number): void;
}>();
</script>
<template>
  <div class="cart">
    <h2>Cart</h2>
    <CartItem
      v-for="item in cart"
      :key="item.id"
      :item="item"
      @remove-from-cart="emit('remove-from-cart', item.id)"
      @update-quantity="emit('update-quantity',item.id)"
    />
    <p class="total"> Total: Rs.{{ props.total }}</p>
  </div>
</template>
<style scoped>
    .cart {
  border-top: 1px solid #ddd;
  padding-top: 1rem;
}
.total {
  font-weight: bold;
  margin-top: 1rem;
  text-align: right;
}
</style>
