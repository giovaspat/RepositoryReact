export function Mouseclicker () {
  function handleButtonClick(event) {
    console.log(event.target.name)
  }

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>Click here</button>
    </div>
  )
}