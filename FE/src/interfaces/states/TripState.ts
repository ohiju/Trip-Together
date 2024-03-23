interface TripState {
  tripInfo: {
    plan_id: number;
    start_region: string;
    start_at: Date;
    end_at: Date;
    title: string;
    total_estimated_budget: number;
    total_budget: number;
    status: string;
    daily_plans: {
      attractions: {attraction_id: number}[];
      order: number;
      daily_estimated_budget: number;
    }[];
  };
}

export type {TripState};
