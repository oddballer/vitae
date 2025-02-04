import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WorkView from '../views/WorkView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import WorkDetailsView from '../views/WorkDetailsView.vue'
import ProjectDetailsView from '../views/ProjectDetailsView.vue'

const routes = [
  { path: '/', component: HomeView, name: 'home' },
  { path: '/about', component: AboutView, name: 'about' },
  { path: '/contact', component: ContactView, name: 'contact' },
  { path: '/work', component: WorkView, name: 'work' },
  { path: '/projects', component: ProjectsView, name: 'projects' },
  { path: '/work/:id', component: WorkDetailsView, name: 'workDetails' },
  { path: '/projects/:id', component: ProjectDetailsView, name: 'projectDetails' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;