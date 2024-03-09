export const apiPaths: Record<string, string> = Object.freeze({
  usersBase: "http://localhost:3011/usersBase",
  wahaNotes: "http://localhost:3012/wahaNotes",
  wahaLibrary: "http://localhost:3013/wahaLibrary",
  bookAvatars: "http://localhost:3014/images/bookAvatars",
  //Для получения юзера и списка заметок
  authPath: "http://localhost:3015",
  testTodos: "https://jsonplaceholder.typicode.com/todos/",
});

export const paths: Record<string, string> = Object.freeze({
  library: "/library",
  login: "/login",
  register: "/register",
  logout: "/logout",
  test: "/test",
  persona: "/persona",
  structure: "/structure",
});
