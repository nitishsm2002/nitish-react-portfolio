import React from 'react';

const ButtonLink = ({ text, padding, onClick }) => {
  return (
    <button
      onClick={onClick} // Add an onClick handler if necessary
      className={`transition ease-in-out duration-300 ${padding} rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer`}
    >
      {text}
    </button>
  );
}

export default ButtonLink;