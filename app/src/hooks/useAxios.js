import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, method, deleteId = null) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (deleteId !== null) {
          await axios[method](`${url}/${deleteId}`, { method: "DELETE" }).then(
            () => fetchData()
          );
        } else {
          await axios[method](url).then((res) => {
            setData(res.data);
          });
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [deleteId, method, url]);

  return { data, error, loading };
};

export default useAxios;
