import { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      {isDark ? <MdDarkMode className='hover:rotate-12 duration-100 text-2xl sm:text-lg cursor-pointer'/> : <MdLightMode className='hover:rotate-12 duration-100 text-2xl sm:text-lg cursor-pointer'/>}
    </button>
  );
};

export default DarkModeToggle;
