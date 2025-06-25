import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = "http://localhost:5167/api";

export const loginAPI = async (username: string, password: string) => {

    try {
        const data = await axios.post<UserProfileToken>(api + "account/login", {
            username: username,
            password: password
        });

        return data;
    } catch (error) {
        handleError(error);
    }
};