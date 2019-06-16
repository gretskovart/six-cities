export const prepareData = (data) => {
  return data.map((it) => {
    return {
      id: it.id,
      img: it.preview_image,
      imgList: [...it.images],
      maxAdults: it.max_adults,
      goods: [...it.goods],
      bedrooms: it.bedrooms,
      host: {
        id: it.host.id,
        name: it.host.name,
        isPro: it.host.is_pro,
        avatarUrl: it.host.avatar_url
      },
      description: it.description,
      isPremium: it.is_premium,
      price: it.price,
      rating: it.rating,
      title: it.title,
      type: it.type,
      coordinates: [it.location.latitude, it.location.longitude],
      city: it.city.name,
      cityCoords: [it.city.location.latitude, it.city.location.longitude],
      cityZoom: it.city.location.zoom
    };
  });
};
