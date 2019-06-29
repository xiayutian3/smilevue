import Vue from 'vue';
import Loading from './loading';
// 创建一个“子类”
let LoadingC = Vue.extend(Loading);
let instance;
export default {
    open (options = {}) {
        if (!instance) {
            this.initInstance(options);
        }
        instance.visible = true;
    },
    initInstance (options) {
        // 创建子类实例
        instance = new LoadingC({
            el: document.createElement('div')
        });
        // 传入属性
        instance.text = options.text || '加载中';
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                instance[prop] = options[prop];
            }
        }
        // 插到body里
        // document.body.appendChild(instance.$el);   //这种方法也可以
        document.body.appendChild(instance.$mount().$el);
        Vue.nextTick(() => {
            instance.visible = true;
        });
    },
    close () {
        instance.visible = false;
    }
};

