export interface IAuthInterface {
  user: {
    email: string | null;
    id: number | null;
  } | null;
  errorMessage: string | null;
  isAuth: boolean | null;
  isAuthLoading: boolean | null;
}

export interface IGET_LOGIN_SUCCEED {
  user: {
    email: string;
    id: number;
  };
  accessToken?: string;
}

export enum EReserveErrorMessages {
  signUpError = "Sign Up Error :(",
  signInError = "Login Error :(",
  reloadError = "Authorization Error :(",
}
