<template>
  <div id="app">
    <div id="nav">
      <div>
        <router-link :to="item.path" v-for="(item,index) in list" :key="index">{{item.name}}</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          name:"首页",
          path:'/sye'
        },{
          name:"书城",
          path:'/cheng'
        },{
          name:"书架",
          path:'/jia'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
