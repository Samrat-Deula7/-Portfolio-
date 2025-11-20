import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StarBackground } from './components/StarBackground'
import { useState } from 'react'
const Root = () => {
  const [darkmode, setDarkmode] = useState(true);

  return (
    <StrictMode>
      <StarBackground darkmode={darkmode} />
      <App darkmode={darkmode} setDarkmode={setDarkmode} />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);

