import { createContext } from "react";

export interface IAddParams {
  email: string;
  password: string;
  nickname: string;
  domain: string
}
export type IRemoveParams = string

interface IUsersActions {
  add: (params: IAddParams)=>void,
  remove: (params: IRemoveParams)=>void,
}

interface IGContent {
  users: IUsersActions,
}

export const GContext = createContext<IGContent>({
  users: {
    add: ({ email, password, nickname, domain }) => {},
    remove: (id) => {},
  },
});
