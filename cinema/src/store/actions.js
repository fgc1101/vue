const actions = {
  aUpdateStu(context,data){

    console.log(data);
    setTimeout(()=>{
      context.commit('updateStu',data);
    })
  }
}
export default actions
