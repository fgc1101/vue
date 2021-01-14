<template>
  <div id="app">

<!--    <img src="./assets/logo.png">-->
<!--    <h1>{{$store.state.count}}</h1>-->
<!--    <button @click="btnAdd">tianjia</button>-->
<!--    <p>{{$store.getters.more30stu}}</p>-->
<!--    <p>个数：{{$store.getters.more30stuLenth}}</p>-->
<!--    <p>大于40岁的学生：{{$store.getters.moreAgeStu(40)}}</p>-->
<!--    <div>-->
<!--      <button @click="btnAdd(10)">+10</button>-->
<!--      <button @click="addStu">添加学生</button>-->
<!--      <button @click="updateStu">更新学生信息</button>-->
<!--      <button @click="aupdateStu">异步更新学生信息</button>-->
<!--    </div>-->
<!--    <div>-->
<!--      {{$store.state.info}}-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    btnAdd(count) {
      this.$store.commit('increment', count)
    },
    addStu(){
      var student = {id:123,name:'ouwen',age:39}
      this.$store.commit('addStudent',student)
    },
    updateStu(data){
      var data = {
        num:200,
        haver:'chw'
      }
      // this.$store.commit('updateStu',data)
      this.$store.commit({
        type:'updateStu',
        data
      })
    },
    aupdateStu(){
      var data = {
        num:200,
        haver:'chw'
      }
      this.$store.dispatch({
        type: 'aUpdateStu',
        data: data
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
