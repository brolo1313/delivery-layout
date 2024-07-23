export interface AppResponse<T> {
  status: number;
  reason: string;
  data: T;
}
