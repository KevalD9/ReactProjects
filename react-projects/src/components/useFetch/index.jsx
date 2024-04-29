import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });

      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(`${error} - Some Error Occured.`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
