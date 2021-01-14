const mutations = {
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
}

export default mutations
