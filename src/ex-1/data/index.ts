import { useCallback, useEffect, useState } from "react";

import createFetch from "../../libs/fetch";
import { IUser } from "../interface";

export const useExcersie1Data = () => {
  const [list, setList] = useState<IUser[]>([]);
  const customFetch = createFetch();
  const userApiUrl = "https://jsonplaceholder.typicode.com/users";

  const onViewUserLocation = useCallback(() => {}, []);

  useEffect(() => {
    customFetch(userApiUrl).then(setList);
  }, []);

  return {
    list,
    onViewUserLocation
  };
};
