import { Container } from "./Container";
import { Clock } from "./Clock";
import { useState } from "react";
import { LanguageContext } from "./LanguageContext";


export function App() {
  const [language, setLanguage] = useState("en")

  function handleSetLanguage(language) {
    setLanguage(language)
    
  }
  return (
    <div>
      <button onClick={() => handleSetLanguage("it")}>IT</button>
      <button onClick={() => handleSetLanguage("en")}>EN</button>
      <Container title={<h1>This is the Clock</h1>}>
        <LanguageContext.Provider value={language}>
          <Clock/>
        </LanguageContext.Provider>
      </Container>
    </div>
  );
}