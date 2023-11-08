import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <div class="content">
    <h2>Your Favorites Resto</h2>
    <div id="restaurant-list" class="restaurant-list">

    </div>
  </div>
`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurant();
    const restaurantContainer = document.querySelector('#restaurant-list');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
