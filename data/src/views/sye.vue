<template>
<div>
  <div>
    <span v-for="(item,index) in list" :key="index" @click="tab(index)">{{item.name}}</span>
  </div>
  <div>
    <p v-for="(item,index) in getdata" :key="index">{{item.name}}</p>
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
          name:"男生",
          index:0
        },{
          name:"女生",
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
    }
  },
  tab(index){
    this.ind=index
    if(this.ind===turn){

    }
  }
}
</script>

<style>

</style>