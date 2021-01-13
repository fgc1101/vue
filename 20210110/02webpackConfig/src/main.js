import Vue from 'vue';
import Home from './Home.vue'

const vm = new Vue({
    el:'#app',
    render:c=>c(Home)
})
