import Home from './component/Home.vue';
import About from './component/About.vue';
import Product from './component/Product.vue';
import Recruit from './component/Recruit.vue';
import Contact from './component/Contact.vue';
import ProductChild from './component/ProductChild.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/product',
    name: 'product',
    component: Product
    , children: [
      {
        path: '/product/child',
        name: 'productchild',
        component: ProductChild
      }
    ]
  },
  {
    path: '/recruit',
    name: 'recruit',
    component: Recruit
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]
