import { useState } from 'react';
import { ThemedContext } from './ThemedContext'; 

export default function ThemedProvider({ children }) {
  const [theme, setTheme] = useState('light');

  return (
    <>
      <ThemedContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemedContext.Provider>
    </>
  );
}
