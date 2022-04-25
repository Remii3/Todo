import { useState } from "react";
const useFormCheck = (currentTitle, currentDate, currentDescription) => {
  const [isTouched, setIsTouched] = useState({
    title: false,
    date: false,
    desc: false,
  });

  const titleCheck = currentTitle.trim() === "" && isTouched.title;

  const dateCheck =
    currentDate.slice(0, 10) < new Date().toISOString().slice(0, 10) &&
    isTouched.date;

  const descCheck = currentDescription.trim() === "" && isTouched.desc;

  const titleBlurHandler = () => {
    setIsTouched({ ...isTouched, title: true });
  };

  const dateBlurHandler = () => {
    setIsTouched({ ...isTouched, date: true });
  };

  const descBlurHandler = () => {
    setIsTouched({ ...isTouched, desc: true });
  };

  return {
    titleCheck,
    dateCheck,
    descCheck,
    titleBlurHandler,
    dateBlurHandler,
    descBlurHandler,
  };
};

export default useFormCheck;
