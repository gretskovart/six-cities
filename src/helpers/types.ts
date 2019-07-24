type OfferType = {
  bedrooms: number;
  city: string;
  cityCoords: [number, number];
  cityZoom: number;
  coordinates: [number, number];
  description: string;
  goods: string[];
  host: {
    id: number,
    name: string,
    isPro: boolean,
    avatarUrl: string
  };
  id: number;
  img: string;
  imgList: string[];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  price: number;
  rating: number;
  title: string;
  type: string;
}

type ReviewType = {
  id: number;
  date: string;
  dateString: string;
  comment: string;
  rating: number;
  user: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  };
}

export {
  OfferType,
  ReviewType
};
