export const prepareData = (data) => {
  return data.map((it) => {
    return {
      id: it.id,
      img: it.preview_image,
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
