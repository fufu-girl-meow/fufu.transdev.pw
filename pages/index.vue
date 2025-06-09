<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()

</script>
<template>
  <div class="w-screen h-screen relative overflow-hidden">
    <div class="absolute bg-new-pink/60 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-3xl"
      :style="{
        left: `${x}px`,
        top: `${y}px`,
        width: `200px`,
        height: `200px`,
      }">
    </div>
    <Header />
    <div
      class="mt-10 mx-auto mb-10 backdrop-blur-sm bg-new-pink/30 text-white p-4 rounded-lg shadow-md w-full max-w-xl ring-4 ring-new-purple/30 flex justify-center items-center">
      <div class="mb-4 flex flex-col items-center justify-center text-center">
        <img src="https://cdn.discordapp.com/avatars/1351765478690918402/0fbc4fdad592c67963f3a09929f5717f" height="64"
          width="64"
          class="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-lg border border-solid border-overlay0 mb-5 sm:mb-0 sm:mr-4 drop-shadow-lg">
        <div class="flex flex-col items-center sm:items-start">
          <a class="mb-1 mt-3 font-medium text-2xl text-white text-shadow-new-dark-purple drop-shadow-lg text-shadow-lg/40">fufu
            :3</a>
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>