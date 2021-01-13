import Vue from './vue.js'
import App from './App.js'

const vm = new Vue({
    el:'#app',
    components:{
        App,
    },
    template:`
        <App />
    `
})
