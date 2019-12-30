<template>
  <div class="er">
    <div class="ban">
      <span v-for="(item,index) in list" :key="index" @click="jia(index)">{{item.name}}</span>
    </div>
    <div>
      <span v-for="(item,index) in getdata" :key='index'>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ind:"",
      getdata:[],
      list:[
        {
          name:"加班",
          index:0
        },{
          name:"休息",
          index:1
        }
      ]
    }
  },
  created(){
    this.newdata()
  },
  methods:{
    newdata(){
      this.$http.get('/api/list').then(res=>{
      this.getdata=res.data.data
      console.log(this.getdata)
      })
    },
    jia(index){
      console.log(index)
      this.ind=index;
    }
  }
}
</script>

<style lang="scss">
.er{
  width: 100%;
  height: 100%;
}
.ban{
  width: 100%;
  height: 45px;
  background: rgb(202, 202, 202);
}
.ban span{
  text-align: center;
  line-height: 45px;
  margin-left: 100px;
  color:#000;
}
</style>