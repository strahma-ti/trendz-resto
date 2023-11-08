import Home from '../views/pages/home';
import Favorites from '../views/pages/favorites';
import About from '../views/pages/about';
import Detail from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/favorites': Favorites,
  '/about': About,
  '/detail/:id': Detail,
};

export default routes;
