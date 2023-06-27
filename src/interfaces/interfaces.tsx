export interface LikeButtonProps {
  isLiked: boolean;
  isInWishlist: boolean;
  onClick: () => void;
  onWishlistClick: () => void;
}

export interface Flower {
  Id: string;
  Growth: string;
  Img: string;
  Climate: string;
  Name: string;
  Family: string;
  Irrigation: string;
  Luminosity: string;
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
