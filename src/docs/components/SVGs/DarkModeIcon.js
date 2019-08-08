import React from "react";

const DarkModeIcon = ({ className, onClick }) => (
  <button rel="noopener" target="_blank" aria-label="Switch to dark mode" className={className} onClick={() => console.log('change mode')} onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  </button>
);

export default DarkModeIcon;