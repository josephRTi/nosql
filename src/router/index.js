import { createRouter, createWebHistory } from 'vue-router'
import TheIndex from "@/components/TheIndex";
import TheHistory from "@/components/TheHistory";
import Comparing from "@/components/Comparing";
import TheUsage from "@/components/TheUsage";
import TheTypes from "@/components/TheTypes";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheIndex,
    alias: '/index'
  },
  {
    path: '/history',
    name: 'History',
    component: TheHistory
  },
  {
    path: '/compare',
    name: 'Сравнение',
    component: Comparing
  },
  {
    path: '/usage',
    name: 'Использование',
    component: TheUsage
  },
  {
    path: '/types',
    name: 'Типы NoSQL',
    component: TheTypes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
})

export default router
