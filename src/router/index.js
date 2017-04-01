import Vue from 'vue';
import Router from 'vue-router';
import cn from '@/components/cn/cn';
import en from '@/components/en/en';
import jp from '@/components/jp/jp';
import kr from '@/components/kr/kr';
import tw from '@/components/tw/tw';
import hk from '@/components/hk/hk';
import fr from '@/components/fr/fr';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/cn'
    },
    {
      path: '/cn',
      component: cn
    },
    {
      path: '/en',
      component: en
    },
    {
      path: '/jp',
      component: jp
    },
    {
      path: '/kr',
      component: kr
    },
    {
      path: '/tw',
      component: tw
    },
    {
      path: '/hk',
      component: hk
    },
    {
      path: '/fr',
      component: fr
    }
  ]
});
