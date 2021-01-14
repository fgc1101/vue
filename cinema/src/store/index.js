import Vuex from 'vuex'
import Vue from 'vue'

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
  mutations:{
    increment(state,count){
      return state.count += count;
    },
    addStudent(state,student){
      return state.students.push(student)
    },
    updateStu(state,data){
      let key = Object.keys(data.data);
      let value = Object.values(data.data);
      key.forEach(function(val,index){
        Vue.set(state.info,val,value[index])
      })
    },
  },
  getters:{
    more30stu(state){
      return state.students.filter(s=> s.age >= 20);
    },
    more30stuLenth(state,getters){
      return getters.more30stu.length
    },
    moreAgeStu(state,getters){
      // return function(age){
      //   return state.students.filter(s=> s.age >= age);
      // }

      return age => {
        return state.students.filter(s=> s.age >= age);
      }
    }
  },
  actions:{
    aUpdateStu(context,data){

      console.log(data);
      setTimeout(()=>{
        context.commit('updateStu',data);
      })
    }
  }
})

export default store
