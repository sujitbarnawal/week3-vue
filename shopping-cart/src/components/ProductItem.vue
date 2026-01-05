<script setup lang="ts">
import type { Product } from '@/types/product';


const props = defineProps<{
    product: Product
}>()

const emit = defineEmits<{
    (e: "add-to-cart", product: Product): void
}>()
</script>
<template>
    <div class="product-item">
        <h3>{{ product.name }}</h3>
        <p>Rs.{{ product.price }}</p>
        <button @click="emit('add-to-cart', props.product)">Add to Cart</button>
    </div>
</template>
<style scoped>
.product-item {
    border: 1px solid #eee;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    flex:1;
    min-width: 200px;
    margin-bottom: 10px;
}

button {
    margin-top: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;
    background: #4f46e5;
    color: #fff;
    cursor: pointer;
}
</style>