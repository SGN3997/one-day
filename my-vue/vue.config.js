const arr=require('./public/mock/mock')

module.exports={
  lintOnSave:false,
  devServer:{
    before(app){
      app.get('/api/list',(req,res)=>{
        res.json({
          data:arr
        })
      })
    }
  }
}
