<template>
  <div id="app">
    <div class="header">
      <router-link :to='item.path' v-for="(item,index) in xia" :key="index">{{item.name}}</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      
    </div>
    
  </div>
</template>

<script>

export default {
  data(){
    return{
      xia:[
        {
          name:"待处理",
          path:'/dai'
        },{
          name:"已发起",
          path:'/fa'
        },{
          name:"已处理",
          path:'/yi'
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
  text-decoration: none;
  list-style:node;
}
html,body,#app{
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
  background: pink;
}
.header a{
  text-align: center;
  line-height: 45px;
  margin-left: 55px;
  color: rgb(223, 223, 223)
}
.main{
  flex:1;
  overflow: auto;
}
.footer{
  width: 100%;
  height: 45px;
  background: pink;
}
</style>
