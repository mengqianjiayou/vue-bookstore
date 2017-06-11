<template>
    <div>
      <div class="col-md-3" v-for="book in books">
        <div class="panel panel-warning">
          <div class="panel-heading">书名:{{book.bookName}}</div>
          <div class="panel-body text-center"><img :src="book.bookCover" ></div>
          <div class="panel-footer">
            价格:{{book.bookPrice | currency('￥')}}
            <router-link :to="{name:'detail',params:{id:book.id}}">进入详情</router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        filters:{
          currency(input,parma1){
              return parma1+input;
          }
        },
        created(){
            //配置代理表
            this.$http.get('/book').then((res)=> {
                this.books = res.body;//数据会放在res.body对象中
            })
        },
        data(){
            return {
                books:[]
            }
        },
        components: {},
        methods: {}
    }
</script>
  height:200px;
<style scoped>
 img{
   width:150px;
}
</style>
