import { useEffect, useState } from "react";

const useUpazila = () => {
  const [upazilas, setUpazilas] = useState([]);

  useEffect(() => {
    fetch("/utils/json/upazilas.json")
      .then((res) => res.json())
      .then((data) => {
        setUpazilas(data);
      });
  }, []);
  return [upazilas];
};

export default useUpazila;
