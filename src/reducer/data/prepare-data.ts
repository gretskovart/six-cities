export const prepareData = (data) => {
  return data.map((it) => {
    return {
      bedrooms: it.bedrooms,
      city: it.city.name,
      cityCoords: [it.city.location.latitude, it.city.location.longitude],
      cityZoom: it.city.location.zoom,
      coordinates: [it.location.latitude, it.location.longitude],
      description: it.description,
      goods: [...it.goods],
      host: {
        avatarUrl: it.host.avatar_url,
        id: it.host.id,
        isPro: it.host.is_pro,
        name: it.host.name
      },
      id: it.id,
      img: it.preview_image,
      imgList: [...it.images],
      isFavorite: it.is_favorite,
      isPremium: it.is_premium,
      maxAdults: it.max_adults,
      price: it.price,
      rating: it.rating,
      title: it.title,
      type: it.type
    };
  });
};
