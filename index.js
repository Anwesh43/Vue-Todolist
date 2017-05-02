import Vue from 'vue'
import plugin from 'vue-resource'
Vue.use(plugin)
console.log(plugin)
const app = new Vue({
    el:'#app',
    data:{
        message:"hello world"
    }
})
