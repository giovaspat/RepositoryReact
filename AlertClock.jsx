export function AlertClock () {
  function handleButtonClick () {
    const currentTime = new Date;
    alert(`${currentTime.toLocaleTimeString()}`)
  }

  return (
  <div>
    <button onClick={handleButtonClick}>Click here</button>
  </div>
  )
}


 
