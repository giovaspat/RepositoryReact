import { useEffect, useState } from "react"

export function Clock () {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setDate(new Date())
    }, 1000);
  })

  return (
    <div className="container">
      <h2 className="clockNow">Time now is <span>{date.toLocaleTimeString()}</span> </h2>
    </div>
  )
}