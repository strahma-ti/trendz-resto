/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (FavoriteRestaurant) => {
  it('should return the resto that has been added', async () => {
    FavoriteRestaurant.putRestaurant({ id: 1 });
    FavoriteRestaurant.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await FavoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await FavoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a resto from being added if it does not have the correct property', async () => {
    FavoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the resto that have been added', async () => {
    FavoriteRestaurant.putRestaurant({ id: 1 });
    FavoriteRestaurant.putRestaurant({ id: 2 });

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite resto', async () => {
    FavoriteRestaurant.putRestaurant({ id: 1 });
    FavoriteRestaurant.putRestaurant({ id: 2 });
    FavoriteRestaurant.putRestaurant({ id: 3 });

    await FavoriteRestaurant.deleteRestaurant(1);

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a resto even though the resto has not been added', async () => {
    FavoriteRestaurant.putRestaurant({ id: 1 });
    FavoriteRestaurant.putRestaurant({ id: 2 });
    FavoriteRestaurant.putRestaurant({ id: 3 });

    await FavoriteRestaurant.deleteRestaurant(4);

    expect(await FavoriteRestaurant.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoModel };
