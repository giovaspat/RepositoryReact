import { useEffect, useState } from "react"
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock () {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  })

  const language = useContext(LanguageContext)

 return (
    <div>
      <h2>
        {language === "en" ? `Time now is ${date.toLocaleTimeString()}`: `L'ora corrente è ${date.toLocaleTimeString()}`}
      </h2>
    </div>
  );
}

