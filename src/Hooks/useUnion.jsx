import { useEffect, useState } from "react";

const useUnion = () => {
  const [unions, setUnions] = useState([]);

  useEffect(() => {
    fetch("/utils/json/unions.json")
      .then((res) => res.json())
      .then((data) => {
        setUnions(data);
      });
  }, []);
  return [unions];
};

export default useUnion;
