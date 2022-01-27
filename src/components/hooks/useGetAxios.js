import { useState, useEffect } from "react";
import axios from "axios";

const useGetAxios = ({ endpoint }) => {
  const url = process.env.REACT_APP_BACKEND;

  const [data, SetData] = useState([]);

  useEffect(() => {
    try {
      axios(url + `/${endpoint}/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response);
          SetData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    data: data,
  };
};

export default useGetAxios;
