<template>
  <div class="panel">
    <div class="top">
      <canvas id="canvas"></canvas>
      <span class="text">canvas</span>
    </div>
    <div class="bottom">
      <canvas id="webgl"></canvas>
      <span class="text webgl">webgl</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useWebgl, useCanvas } from '@/hooks/useClass04'

const { initWebgl } = useWebgl()
const { initCanvas } = useCanvas()

onMounted(() => {
  initCanvas()
  initWebgl()
})
</script>

<style>
.panel {
  width: 100vw;
  height: 100vh;
  .top,
  .bottom {
    position: relative;
    width: 100%;
    height: 50%;
    #canvas,
    #webgl {
      width: 100%;
      height: 100%;
    }
    .text {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 1;
      &.webgl {
        color: #fff;
      }
    }
  }
}
</style>
