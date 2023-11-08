// eslint-disable-next-line no-unused-vars
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="hero-image">
<img class="restaurant-poster" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" loading="lazy" />
<h2 class="restaurant-name">${restaurant.name}</h2>
<p class="restaurant-rating">${restaurant.rating}</p>
</div>
<div class="restaurant__info">
  <h3>Information</h3>
  <h4>Location</h4>
  <p>${restaurant.city}</p>
  <h4>Cuisine</h4>
  <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
  <h4>Address</h4>
  <p>${restaurant.address}</p>
</div>
<div class="restaurant__description">
  <h3>Description</h3>
  <p>${restaurant.description}</p>
</div>
<div class="restaurant__menu">
  <h3>Menu Makanan</h3>
  <ul>
    ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
  </ul>
  <h3>Menu Minuman</h3>
  <ul>
    ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
  </ul>
</div>
<div class="restaurant__reviews">
  <h3>Ulasan Pelanggan</h3>
  <ul>
    ${restaurant.customerReviews.map((review) => `<li>${review.name}: ${review.review}</li>`).join('')}
  </ul>
</div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-item">
    <img class="restaurant-poster" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}" loading="lazy" />
    <a id="restaurant-name" class="restaurant-name" href="#/detail/${restaurant.id}">${restaurant.name}</a>
    <div class="restaurant-description">${restaurant.description}</div>
    <div class="restaurant-city">${restaurant.city}</div>
    <div class="restaurant-rating">${restaurant.rating}</div>
</div>
`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
