const getters = {
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
}

export default getters
