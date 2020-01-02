<template>
  <div id="app">
    <div class="header">
      
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link :to="item.path" v-for="(item,index) in list" :key="index">{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          name:"消息",
          path:'/xiao'
        },{
          name:"分组",
          path:'/fen'
        },{
          name:"空间",
          path:'/kong'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,html,#app{
  width: 100%;
  height: 100%;
}
#app{
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 45px;
  background: rgb(0, 204, 255);
}
.main{
  flex: 1;
  overflow: auto;
}
.footer{
  width: 100%;
  height: 45px;
  background: rgb(0, 204, 255);
}
</style>
