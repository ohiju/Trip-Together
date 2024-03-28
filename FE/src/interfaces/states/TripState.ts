interface attraction {
  attraction_id: number;
  thumbnail_image_url: string;
  name: string;
  address: string;
  avg_rating: string;
  avg_price: string;
}

interface TripState {
  tripInfo: {
    plan_id: number;
    nation: string;
    start_region: number;
    start_longitude: string;
    start_latitude: string;
    start_at: string;
    end_at: string;
    city_name: string;
    title: string;
    total_estimated_budget: number;
    total_budget: number;
    status: string;
    daily_plans: {
      attractions: attraction[];
      order: number;
      daily_estimated_budget: number;
    }[];
  };
}

export type {TripState};
