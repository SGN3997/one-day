<template>
  
</template>

<script>
export default {
data(){
  return{
    getxiang:[]
  }
},
created(){
  this.newxiang()
},
methods:{
  newxiang(){
    this.$http.get('/api/list').then(res=>{
      
    })
  }
}
}
</script>

<style>

</style>