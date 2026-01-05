<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import ProductList from './components/ProductList.vue';
import type { Product } from './types/product';
import Cart from './components/Cart.vue';

const products = ref<Product[]>([
  { id: 1, name: "Bat", price: 2000, quantity: 1 },
  { id: 2, name: "Ball", price: 300, quantity: 1 },
  { id: 3, name: "Gloves", price: 750, quantity: 1 },
  { id: 4, name: "Helmet", price: 1500, quantity: 1 },
  { id: 5, name: "Stumps", price: 2500, quantity: 1 },
  { id: 6, name: "Shoes", price: 3500, quantity: 1 },
])

const cart = ref<Product[]>(
  JSON.parse(localStorage.getItem('cart') || '[]')
)

watch(
  cart,
  (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
  },
  { deep: true }
)



const addToCart = (product: Product) => {
  const item = cart.value.find(p => p.id === product.id)
  if (item) {
    item.quantity++
  } else {
    cart.value.push({ ...product })
  }
}

const removeFromCart = (id: number) => {
  cart.value = cart.value.filter(p => p.id !== id)
}

const updateQuantity = (id: number) => {
  const item = cart.value.find(p => p.id === id)
  if (item) {
    item.quantity++
  }
}

const totalPrice = computed(()=> {
 return cart.value.reduce((sum, product) => sum + product.price * product.quantity, 0)

})


</script>

<template>
  <main class="app">
    <h1>🛒 Shopping Cart</h1>
    <ProductList :products="products" @add-to-cart="addToCart" />
    <Cart :cart="cart" :total=totalPrice @remove-from-cart="removeFromCart" @update-quantity="updateQuantity" />
  </main>

</template>

<style scoped>
.app {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
