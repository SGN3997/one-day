<template>
  <div>
    <ul v-for="(item,index) in getdata" :key="index">
      <li>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      getdata:[]
    }
  },
  created(){
    this.newdata()
  },
  methods:{
    newdata(){
      this.$http.get('/api/list').then(res=>{
        this.getdata=res.data
        console.log(this.getdata)
      })
    }
  }
}
</script>

<style>

</style>