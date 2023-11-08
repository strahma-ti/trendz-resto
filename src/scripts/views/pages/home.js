import RestaurantApiSource from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="hero">
    <img src="../../../public/images/hero-image_2.jpg" alt="TrendzResto Hero Image">
    <h1>Selamat Datang di TrendzResto</h1>
    <p>Nikmati hidangan lezat dari berbagai restoran disini.</p> <a href="#restaurant-list" class="cta-button">Jelajahi Sekarang</a> 
    </div>
    <div class="restaurant-list" id="restaurant-list">
    </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiSource.listRestaurants();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurantContainer.innerHTML = '';

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
