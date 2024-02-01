import axios from "axios";
import { apiPaths } from "src/constants/api/paths";
import { IAuthInterface } from "src/store/currentStates/authState/@types";

const getUser = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_USERS,
});

interface IPostData {
  email: string;
  password: string;
}

const signUp = async <T extends string, U extends Record<string, string>>(
  path: T,
  postData: U
): Promise<object | string> => {
  try {
    const response: object = await axios
      .post(`${apiPaths.authPath}/${path}`, postData)
      .then((resNotes) => resNotes.data);
    return response;
  } catch (error) {
    const errorText: string = error?.response?.data;
    return errorText || "unknown Error :(";
  }
};

export { signUp };
