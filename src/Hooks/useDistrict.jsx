import { useEffect, useState } from "react";

const useDistrict = () => {
  const [districs, setDistrics] = useState([]);

  useEffect(() => {
    fetch("/utils/json/districts.json")
      .then((res) => res.json())
      .then((data) => {
        setDistrics(data);
      });
  }, []);
  return [districs];
};

export default useDistrict;
