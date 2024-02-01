// Пути селекторов на Toolkit
export const AuthIsAuth = (state) => state.authStore.isAuth;
export const AuthIsLoading = (state) => state.authStore.isAuthLoading;
export const AuthIsWarnOrErrorMessage = (state) => state.authStore.errorMessage;
export const AuthIsUser = (state) => state.authStore.user;
