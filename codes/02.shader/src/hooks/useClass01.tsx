
export function useWebgl() {
  // 顶点着色器
  const vertex = `
    attribute vec4 a_Position;
    void main(){
      gl_Position = a_Position;
      gl_PointSize = 50.0;
    }
  `;
  // 片元着色器
  const fragment = `
    void main(){
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `;
  const initWebgl = () => {
    const canvas: any = document.querySelector('#webgl');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // 三维画笔
    const gl = canvas.getContext('webgl');

    // 初始化着色器
    // 功能： 解析着色器文本，整合到程序对象里，关联webgl上下文对象，实现两种语言的通信
    initShader(gl, vertex, fragment);

    // 声明颜色 rgba
    gl.clearColor(0, 0, 0, 1);
    // 刷底色
    gl.clear(gl.COLOR_BUFFER_BIT);

    // 绘制顶点
    gl.drawArrays(gl.POINTS, 0, 1);
  };

  const initShader = (gl: any, vertexShaderText: any, fragmentShaderText: any) => {
    // 创建程序对象
    const program = gl.createProgram();
    // 建立着色器对象
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vertexShaderText);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fragmentShaderText);
    // 把顶点着色对象装进程序对象中
    gl.attachShader(program, vertexShader);
    // 把片元着色对象装进程序对象中
    gl.attachShader(program, fragmentShader);
    // 把程序对象关联到上下文对象中
    gl.linkProgram(program);
    // 启动程序对象
    gl.useProgram(program);
    // 将程序对象挂载到上下文对象上
    gl.program = program;
    return true;
  };

  const loadShader = (gl: any, type: any, source: any) => {
    // 根据着色器类型，建立着色器对象
    const shader = gl.createShader(type);
    // 将着色器源文件传入着色器对象中
    gl.shaderSource(shader, source);
    // 编译着色器对象
    gl.compileShader(shader);
    // 返回着色器对象
    return shader;
  };

  return { initWebgl };
}
