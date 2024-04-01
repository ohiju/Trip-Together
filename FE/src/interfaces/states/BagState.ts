interface BagItem {
  attraction_id: number;
  thumbnail_image_url: string;
  attraction_name: string;
  attraction_address: string;
  avg_rating: number;
  avg_price: number;
}

interface BagState {
  bagInfo: BagItem[];
}

export type {BagItem, BagState};
