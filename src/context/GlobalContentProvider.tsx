import { ReactNode } from "react";
import { GContext, IAddParams } from "./globalContext";
// import { usersData } from "../data/usersData/usersData";
import { UserApi } from "../tools/api";

interface IProps {
  children: ReactNode;
}

const GlobalContentProvider = ({ children }: IProps) => {
  const addUser = async (dto: IAddParams) => {
    try {
      const { domain, ...reformDto } = {
        ...dto,
        email: dto.email + dto.domain,
      };
      const data = await UserApi.register(reformDto);

      console.log(dto);

      console.log(test);
    } catch (err) {
      console.warn(err, "addUser");
    }
  };

  return (
    <GContext.Provider
      value={{
        users: {
          add: addUser,
          remove: (id) => {},
        },
      }}
    >
      {children}
    </GContext.Provider>
  );
};

export default GlobalContentProvider;
