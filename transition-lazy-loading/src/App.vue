<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';


const isVisible = ref(false)
const show = ref(false)

const BigFeature = defineAsyncComponent({
 loader: () => import("./components/BigFeature.vue"),
}
);
// const BigFeature = defineAsyncComponent({
//   loader: () =>
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(import("./components/BigFeature.vue"));
//       }, 2000);
//     }),
// });

</script>

<template>
  <button @click="isVisible = !isVisible">Toggle Message</button>
<button @click="show = !show">Show</button>

<Transition name="fade">
  <p v-if="isVisible">Hello, I am Fade!</p>
</Transition>

<Transition name="slide-fade">
  <p v-if="show">Hello</p>
</Transition>

<Transition name="bounce">
  <p v-if="show" style="text-align: center;">Hello! Bounce</p>
</Transition>

<Suspense>
  <template #default>
    <Transition name="fade">
      <BigFeature v-if="isVisible" />
    </Transition>
  </template>

  <template #fallback>
    Loading....
  </template>
</Suspense>


</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>
