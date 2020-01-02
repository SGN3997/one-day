const Mock=require('mockjs')

let arr=[]

for(let i=0;i;i++){
  arr.push({
    id:i,
    name:Mock.Random.cname
  })
}

module.exports=arr