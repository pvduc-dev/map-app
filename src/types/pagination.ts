export interface Pagination<T> {
  paginate(): Promise<T[]>;
}
