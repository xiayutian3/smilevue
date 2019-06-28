import Vue from 'vue'
import toast from './Toast.vue' // 引入toast 组件

// extent方法传入一个vue组件,生成一个子实例对象
// 要求组件中的data必须是函数，也就是为什么我们的组件中的data必须是函数
let ToastConstructor = Vue.extend(toast)

let instance

const Toast = function(
  options={
    content:'',  // 必传参数
    duration:3000   // 显示时间
  }){
    // 渲染成Vue组件
    instance = new ToastConstructor({
      data:options  // 这里的 data 会传到 main.vue 组件中的 data 中，当然也可以写在 props 里
    })
     // instance.$el是生成的DOM对象，添加到body中
     document.body.appendChild(instance.$mount().$el);
  
}


// 以下就是在 Toast 函数中拓展 ["success", "error"] 这两个方法
let tostTypes = ["success", "error"]
tostTypes.forEach(type => {
    Toast[type] = options => {
        options.type = type;
        return Toast(options);
    };
});


// 调用方法this.$Toast.success()...
export default Toast;

