import axios from "axios";
import { apiPaths } from "src/constants/api/paths";

const getUser = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_USERS,
});

interface IPostData {
  email: string;
  password: string;
}

const signUp = async <T extends string, U extends IPostData>(
  path: T,
  postData: U
) => {
  const response = await axios
    .post(`${apiPaths.authPath}/${path}`, postData)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error("Error"));
  return response;
};

export { signUp };
