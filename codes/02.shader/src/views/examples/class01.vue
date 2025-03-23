<template>
  <div class="panel">
    <canvas id="webgl"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useWebgl } from '@/hooks/useClass01'

const { initWebgl } = useWebgl()

onMounted(() => {
  initWebgl()
})
</script>

<style>
.panel {
  width: 100vw;
  height: 100vh;
  #webgl {
    width: 100%;
    height: 100%;
  }
}
</style>
