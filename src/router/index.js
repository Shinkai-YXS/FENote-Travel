import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import City from '@/pages/city/City';
import Detail from '@/pages/detail/Detail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 跟 keep-alive 结合使用如下，详情查看 https://www.cnblogs.com/sophie_wang/p/7880261.html
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition ||0}
    }
  }

});
