import { printLog } from "./utils.js"; 



// 常见事件：
// 1.鼠标事件   2.键盘事件  3.焦点事件  4.表单事件

//click:鼠标点击事件
document.querySelector('#btn2').addEventListener('click',() => {
    printLog("我被点击了...");
})

//mouseenter:鼠标进入事件
document.querySelector('#last').addEventListener('mouseenter',() => {
    printLog('鼠标进入...');
})

//mouseleave:鼠标离开事件
document.querySelector('#last').addEventListener('mouseleave',() => {
    printLog('鼠标离开...');
})

//keydown:键盘按下事件
document.querySelector('#username').addEventListener('keydown',() => {
    printLog('键盘按下...');
})

//keyup:键盘抬起事件
document.querySelector('#username').addEventListener('keyup',() => {
    printLog('键盘抬起...');
})

// document.querySelector('#username').addEventListener('keydown', (event) => {
//     console.log(`键盘按下: ${event.key}`);
//     });

// document.querySelector('#username').addEventListener('keyup', (event) => {
//     console.log(`键盘抬起: ${event.key}`);
//     });

// focus:元素获得焦点事件
document.querySelector('#age').addEventListener('focus',() => {
    printLog('获得焦点...');
})

//blur:元素失去焦点事件
document.querySelector('#age').addEventListener('blur',() => {
    printLog('失去焦点...');
})

//input:用户输入时触发
document.querySelector('#age').addEventListener('input',() => {
    printLog('用户输入...');
})

//submit:提交表单事件
document.querySelector('form').addEventListener('submit',() => {
    alert('提交表单...');
})