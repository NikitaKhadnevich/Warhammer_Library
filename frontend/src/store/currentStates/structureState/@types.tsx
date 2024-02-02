export interface IDataStruInterface {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface IBooksLibrary {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface IStruInterfaceT<T, B> {
  url: string;
  isFetching: boolean;
  path: string;
  errorMessage: string | null;
  dataSTRU: Array<T>;
  booksLibrary: Array<B>;
}
