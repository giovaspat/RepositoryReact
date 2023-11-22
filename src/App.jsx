import { AlertClock } from "./AlertClock"

export function App() {
  function handleButtonClick() {

    const currentTime = new Date();
    alert(`${currentTime.toLocaleTimeString()}`);
  }

  return <AlertClock onButtonClick= {handleButtonClick}/>;
}
