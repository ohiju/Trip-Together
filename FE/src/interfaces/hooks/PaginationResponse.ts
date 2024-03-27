interface PaginationResponse<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalElements: number;
  totalCount: number;
  last: boolean;
  first: boolean;
}

export type {PaginationResponse};
