import { v4 as uuid } from "uuid";

const generateId = (): string => {
  const id = uuid();
  const sliceId = id.slice(0, 8);

  return sliceId;
};

export default generateId