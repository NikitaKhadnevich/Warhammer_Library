export interface IDataStruInterface {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface IStruInterfaceT<T> {
  url: string;
  isFetching: boolean;
  path: string;
  dataSTRU: Array<T>;
}
