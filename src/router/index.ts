import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import GameView from '../views/GameView.vue';
import CharactersView from '../views/CharactersView.vue';
import ScriptsView from '../views/ScriptsView.vue';
import PartsView from '../views/PartsView.vue';
import VideosView from '../views/VideosView.vue';

export const routes = [
  { path: '/', component: HomeView, name: 'home'},
  { path: '/game', component: GameView, name: 'game' },
  { path: '/characters', component: CharactersView, name: 'characters' },
  { path: '/scripts', component: ScriptsView, name: 'scripts' },
  { path: '/parts', component: PartsView, name: 'parts' },
  { path: '/videos', component: VideosView, name: 'videos' },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
