<template>
  <canvas ref="canvasRef" id="canvas"></canvas>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
onMounted(() => {
  // 获取画布
  const canvas: any = document.querySelector('#canvas')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // 获取三维画笔
  const gl = canvas.getContext('webgl')
  // 指定将要用来清空绘图区的颜色
  gl.clearColor(1, 1, 0, 1)
  // 使用之前指定的颜色，清空绘图区
  gl.clear(gl.COLOR_BUFFER_BIT)

  // 设置随机初始初始值
  const rgbaCss = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)}, 1)`
  const reg: any = RegExp(/\((.*)\)/)
  const rgbaStr = reg.exec(rgbaCss)[1]
  const rgbaArr = rgbaStr.split(',').map((item: any) => parseInt(item))
  const r = rgbaArr[0] / 255
  const g = rgbaArr[1] / 255
  const b = rgbaArr[2] / 255
  const a = rgbaArr[3]
  // 指定将要用来清空绘图区的颜色
  gl.clearColor(r, g, b, a)
  // 使用之前指定的颜色，清空绘图区
  gl.clear(gl.COLOR_BUFFER_BIT)
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
