import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import ModuleA from './modules/ModuleA'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    students:[
      {
        id:110,name:'why',age:18
      },{
        id:120,name:'james',age:36
      },{
        id:130,name:'kobe',age:41
      },{
        id:140,name:'curry',age:20
      }
    ],
    info:{
      name:'jiangyuan',
      compony:'todo',
      year:2
    }
  },
  mutations,
  getters,
  actions,
  modules:{
    a:ModuleA,
  }
})

export default store
