const arr=require('./public/mock/mock')

module.exports={
  lintOnSave:false,
  deServer:{
    before(app){
      arr.get('/api/list',(req,res)=>{
        res.json({
          data:arr
        })
      })
    }
  }
}