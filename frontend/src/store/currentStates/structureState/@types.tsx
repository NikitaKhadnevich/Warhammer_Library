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

export interface INotesLibrary {
  id: number;
  title: string;
  description: string;
  date: string;
  isActive: boolean;
  isChange: boolean;
  isShared: boolean;
  sharedTime: string;
}

export interface IStruInterfaceT<T, B, N> {
  url: string;
  isFetching: boolean;
  path: string;
  errorMessage: string | null;
  dataSTRU: Array<T>;
  booksLibrary: Array<B>;
  notesLibrary: Array<N>;
}
