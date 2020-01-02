<template>
  <div class="lie">
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
  methods: {
    newdata(){
      this.axios.$http.get('/api/list').then(res=>{
        this.getdata=res.data
      })
    }
  }
}
</script>

<style>
.lie{
  width: 100%;
  height: 100%;
}
.lie li{
  width: 100%;
  height: 50px;
}
</style>