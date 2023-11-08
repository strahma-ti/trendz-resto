/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let FavoriteRestaurant = [];

const FavoriteRestoArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line eqeqeq
    return FavoriteRestaurant.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurant() {
    return FavoriteRestaurant;
  },

  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    FavoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    // eslint-disable-next-line eqeqeq
    FavoriteRestaurant = FavoriteRestaurant.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite resto Array Contract Test Implementation', () => {
  global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
  afterEach(() => {
    FavoriteRestaurant = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
