import Home from './components/Home.vue'
import Ranking from './components/Ranking.vue'
import Commit from './components/Commit.vue'


const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/ranking', name: 'ranking', component: Ranking },
    { path: '/commit', name: 'commit', component: Commit }

];

export default routes;