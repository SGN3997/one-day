const Mock=require('mockjs')

let arr=[]

for(let i=0;i<=10;i++){
  arr.push({
    id:i,
    img:Mock.Random.image("100x100",Mock.Random.color()),
    name:Mock.Random.cname(),
    bool:Mock.Random.boolean()
  })
}

module.exports=arr