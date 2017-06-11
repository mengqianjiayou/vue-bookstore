<template>
  <div>
      <div class="panel panel-warning">
        <div class="panel-heading">
            书名:
            <span v-show="!flag">{{book.bookName}}</span>
            <input v-show="flag" type="text" v-model="book.bookName">
        </div>
        <div class="panel-body text-center"><img :src="book.bookCover" ></div>
        <div class="panel-footer">
            价格:
            <span v-show="!flag">{{book.bookPrice | currency('￥')}}</span>
            <input v-show="flag" type="text" v-model="book.bookPrice">
            <button class="btn btn-danger" type="button" v-show="!flag" @click="remove">删除</button>
            <button class="btn btn-warning" type="button" @click="changeflag" v-show="!flag" >修改</button>
            <button class="btn btn-primary" type="button" v-show="flag" @click="update">确认修改</button>
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
        //页面已加载,就获取数据,获取id
       this.id = this.$route.params.id;
       this.$http.get('./book?id='+this.id).then(res=>{
           return this.book=res.body;
       })
    },
    data(){
      return {
        book:{
            bookName:'',
            bookCover:'',
            bookPrice:''
        },
        id:'',
        flag:false//默认不显示输入框
      }
    },
    components: {},
    methods: {
        remove(){
          this.$http.delete('./book?id=' + this.id).then(() => {
            this.$router.push('/list');
          })
        },
      changeflag(){
            this.flag = !this.flag;
      },
      update(){
          this.$http.put('/book?id='+this.id,this.book).then(()=>{
              this.flag=false;
          })
      }
    }
  }
</script>

<style scoped>
  img{
    width:150px;height:200px;
  }
</style>
