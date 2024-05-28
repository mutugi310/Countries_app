import { createContext,useState, useEffect } from "react";


// Create the context
export const ThemeContext= createContext()


// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      // Load theme from local storage if available
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }, []);
  
    useEffect(() => {
      // Save theme to local storage
      localStorage.setItem('theme', theme);
      
    }, [theme]);
  
    const changeTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  return (
    <ThemeContext.Provider value={{theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext