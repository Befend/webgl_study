# 第一章 js与着色器间的数据传输

## 1. attribute 变量的概念

回顾一下我们上一篇中点的定位：

```glsl
gl_Position = vec4(0,0,0,1);
```

这是一种将数据写死了的硬编码，缺乏可扩展性。

我们要让这个点位可以动态改变，那就得把它变成attribute变量。

attribute 变量是只有顶点着色器才能使用它的。

js 可以通过attribute 变量向顶点着色器传递与顶点相关的数据。

## 2. js向attribute变量传参的步骤

+ 在顶点着色器中声明attribute 变量。

```js
const vertex = `
    attribute vec4 a_Position;
    void main(){
        gl_Position = a_Position;
        gl_PointSize = 50.0;
    }
`
```

+ 在js中获取attribute 变量

```js
const a_Position = gl.getAttribLocation(gl.program,'a_Position');
```

+ 修改attribute 变量

```js
gl.vertexAttrib3f(a_Position,0.0,0.5,0.0);
```

### 整体代码

```js

```



## 3. js向attribute变量传参的原理



