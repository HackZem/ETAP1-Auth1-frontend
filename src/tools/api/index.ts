import axios from "axios";
import { TCreateUserDto, TResponseCreateUser } from "./interfaces";

const instance = axios.create({
  baseURL: "http://localhost:4444/",
});

export const UserApi = {
  async register(dto: TCreateUserDto): Promise<TResponseCreateUser> {
    const { data } = await instance.post<
      TCreateUserDto,
      { data: TResponseCreateUser }
    >("/auth/register", dto);
    return data;
  },
};
