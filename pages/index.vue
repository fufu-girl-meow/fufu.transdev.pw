<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()

</script>
<template>
  <div class="w-screen h-screen from-indigo-200 to-violet-300 bg-gradient-to-b from-50% relative overflow-hidden">
    <div class="absolute bg-pink-200 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl" :style="{
      left: `${x}px`,
      top: `${y}px`,
      width: `200px`,
      height: `200px`,
    }">
    </div>
    <Header/>
    <h1 class="text-center">this is index</h1>
    <Bottom/>
  </div>
</template>