<template>
  <div class="panel">
    <canvas id="webgl"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useShader } from '@/hooks/useShader'

const { initShader } = useShader()
// 顶点着色器
const vertex = `
  attribute vec4 a_Position;
  void main(){
    gl_Position = a_Position;
    gl_PointSize = 50.0;
  }
`
// 片元着色器
const fragment = `
  void main(){
    gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
  }
`

function initWebgl() {
  const canvas: any = document.querySelector('#webgl')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  // 三维画笔
  const gl = canvas.getContext('webgl')

  // 初始化着色器
  // 功能： 解析着色器文本，整合到程序对象里，关联webgl上下文对象，实现两种语言的通信
  initShader(gl, vertex, fragment)

  // 设置attribute变量
  const a_Position = gl.getAttribLocation(gl.program, 'a_Position')

  // 修改attribute 变量
  // gl.vertexAttrib1f(a_Position, 0.5);
  // gl.vertexAttrib2f(a_Position, 0.5, 0.5);
  gl.vertexAttrib3f(a_Position, 0.0, 0.5, 0.0)

  // 声明颜色 rgba
  gl.clearColor(0, 0, 0, 1)
  // 刷底色
  gl.clear(gl.COLOR_BUFFER_BIT)

  // 绘制顶点
  gl.drawArrays(gl.POINTS, 0, 1)

  canvas.addEventListener('click', (event: any) => {
    // 鼠标点位置
    const { clientX, clientY } = event
    const { left, top, width, height } = canvas.getBoundingClientRect()

    const [cssX, cssY] = [clientX - left, clientY - top]

    // 解决坐标原点位置的差异
    const [halfWidth, halfHeight] = [width / 2, height / 2]
    const [xBaseCenter, yBaseCenter] = [cssX - halfWidth, cssY - halfHeight]
    // 解决y方向的差异
    const yBaseCenterTop = -yBaseCenter
    // 解决坐标基底的差异
    const [x, y] = [xBaseCenter / halfWidth, yBaseCenterTop / halfHeight]

    gl.vertexAttrib2f(a_Position, x, y)
    // 刷底色
    gl.clear(gl.COLOR_BUFFER_BIT)
    // 绘制顶点
    gl.drawArrays(gl.POINTS, 0, 1)
  })
}

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
