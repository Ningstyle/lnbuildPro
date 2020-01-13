<template>
  <div class="index">
    <div class="box">
      <button @click="requests">请求示例</button>
    </div>
  </div>
</template>

<script>
import {getArticlePage} from '@/api/index'
export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
    getArticlePage(id,pageindex,pagesize){
      getArticlePage(id,pageindex,pagesize).then(res=>{
        // 请求成功处理
        console.log(res.data)
      }).catch(res=>{
        //请求失败处理
        console.log('请求失败')
      })
    },
    requests(){
      this.getArticlePage(2588863,1,20)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
  width:100%;
  button{
    outline:none
  }
}
</style>
