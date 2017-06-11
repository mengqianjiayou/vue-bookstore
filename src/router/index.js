import Vue from 'vue';
import Router from 'vue-router';
import Add from '@/components/Add';
import Detail from '@/components/Detail';
import List from '@/components/List';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/add',
      component: Add
    }, {
      path:'/list',
      component:List
    },{
      path:'/detail/:id',
      component:Detail,
      name:'detail'
    }
  ]
})
