export interface IAuthInterface {
  user: {
    email: string | null;
    id: number | null;
  } | null;
  accessToken: string | null;
  errorMessage: string | null;
  isAuth: boolean;
  isAuthLoading: boolean;
}

export interface IGET_AUTH_SUCCEED {
  accessToken: string;
  user: {
    email: string;
    id: number;
  };
}
