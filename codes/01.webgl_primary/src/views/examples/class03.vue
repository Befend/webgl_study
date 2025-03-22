<template>
  <canvas ref="canvasRef" id="canvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import * as THREE from 'three' // 使用 npm 安装的 three 包

onMounted(() => {
  // 获取画布
  const canvas: any = document.querySelector('#canvas')
  // 获取三维画笔
  const gl = canvas.getContext('webgl')
  // 实例化 Color 对象
  const color = new THREE.Color('rgba(255, 0, 0, 1)')
  // 指定将要用来清空绘图区的颜色
  gl.clearColor(color.r, color.g, color.b, 1)
  // 使用之前指定的颜色，清空绘图区
  gl.clear(gl.COLOR_BUFFER_BIT)

  // 色相偏移动画xs
  const animate = () => {
    // 颜色偏移
    color.offsetHSL(0.01, 0, 0)

    // 更新清空颜色
    gl.clearColor(color.r, color.g, color.b, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)

    // 请求下一帧动画
    requestAnimationFrame(animate)
  }
  // 启动动画
  animate()
})
</script>

<style>
@media (min-width: 1024px) {
  #canvas {
    width: 100vw;
    height: 100vh;
  }
}
</style>
