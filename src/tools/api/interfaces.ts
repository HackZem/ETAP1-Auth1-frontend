export type TCreateUserDto = {
  password: string;
  email: string;
  nickname: string;
};

export type TResponseCreateUser = {
  createdAt: string;
  email: string;
  nickname: string;
  token: string;
  updatedAt: string;
  __v: number;
  _id: string;
};
