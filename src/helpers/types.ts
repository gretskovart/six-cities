type OfferType = {
  bedrooms: number;
  city: string;
  cityCoords: number[];
  cityZoom: number;
  coordinates: number[];
  description: string;
  goods: string[];
  host: {
    avatarUrl: string,
    isPro: boolean,
    name: string
  }
  id: string;
  img: string;
  imgList: string[];
  isActive: boolean;
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  onClick: (event: React.MouseEvent) => void;
  onOfferSelect: Function;
  placesType: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

type ReviewType = {
  id: string;
  date: string;
  dateString: string;
  comment: string;
  rating: number;
  user: {
    avatarUrl: string,
    id: string,
    isPro: boolean,
    name: string
  };
}

type PlacesItemType = {
  id: string,
  img: string,
  isActive: boolean,
  isFavorite: boolean,
  isPremium: boolean,
  onClick: (event: React.MouseEvent) => void,
  onOfferSelect: Function,
  placesType: string,
  price: number,
  rating: number,
  title: string,
  type: string
}

type PlacesDetailType ={
  bedrooms: number,
  description: string;
  goods: string[];
  host: {
    avatarUrl: string,
    isPro: boolean,
    name: string
  }
  id: string;
  imgList: string[];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults: number;
  price: number;
  rating: number;
  title: string;
}

export {
  OfferType,
  ReviewType,
  PlacesItemType,
  PlacesDetailType
};
