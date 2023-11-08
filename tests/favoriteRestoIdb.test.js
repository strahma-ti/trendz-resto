/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  global.structuredClone = (val) => JSON.parse(JSON.stringify(val));
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurant()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
