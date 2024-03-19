import { useState } from "react";
import Homepage from "./Pages/Homepage";
import Header from "./components/Header Component/Header";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Homepage darkMode={darkMode} /> {/* Pass darkMode as prop */}
      </main>
    </div>
  );
}
