<script setup lang="ts">
import type { Product } from "@/types/product";
import ProductItem from "./ProductItem.vue";

const props = defineProps<{
    products: Product[];
}>();

const emit = defineEmits<{
    (e: "add-to-cart", product: Product): void;
}>();
</script>
<template>
    <div class="product-list">
        <ProductItem v-for="product in props.products" :key="product.id" :product="product"
            @add-to-cart="emit('add-to-cart', product)" />
    </div>
</template>
<style scoped>
.product-list {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}
</style>
