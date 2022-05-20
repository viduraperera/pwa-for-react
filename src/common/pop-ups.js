import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '../styles-common/pop-ups.css';

const PopUp = ({ text, buttonText, type, onClick }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!onClick) {
      const timer = setTimeout(() => {
        dispatch({ type });
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="pop-up">
      {text} {buttonText && <button onClick={onClick}>{buttonText}</button>}
    </div>
  );
};

export default PopUp;