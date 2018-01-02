import Vue from 'vue'
import Router from 'vue-router'
import PageRender from '@/components/PageRender'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:pageUrl*',
      name: 'PageRender',
      component: PageRender,
      props: true,
    },
  ],
})
