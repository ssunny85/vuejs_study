import Index from "./component/main/ActivityMain.vue"
import ActivityDetail from "./component/sub/ActivityDetail.vue"

export default [
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {
    path: '/sub',
    name: 'ActivityDetail',
    component: ActivityDetail
  }
]
