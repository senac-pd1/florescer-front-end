export interface LikeButtonProps {
  id: any;
  isLiked: boolean;
  isInWishlist: boolean;
  onClick: () => void;
  onWishlistClick: () => void;
}

export interface Flower {
  name: string;
  img: string;
  luminosity: string;
  id: string;
  growth: string;
  family: string;
  irrigation: string;
  climate: string;
  scientificName: string;
}

export interface ModalProps {
  flower: Flower;
  onClose: () => void;
  isLiked: boolean;
  isInWishlist: boolean;
  onLikeClick: () => void;
  onWishlistClick: () => void;
  onModalLikeClick: () => void;
  onModalWishlistClick: () => void;
}

export interface SearchBarProps {
  onSearch: (flowers: Flower[]) => void;
}

export interface ButtonState {
  isLiked: boolean;
  isInWishlist: boolean;
}
