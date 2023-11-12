export function Mouseclicker () {
  function handleButtonClick(event) {
      console.log(event.target.src, event.currentTarget)
  }

  return (
    <div> 
      <button name="one">
        <img onClick={handleButtonClick} src="https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg" 
        width={20} height={20}/>Click here</button>
    </div>
  )
}

/*Se associamo l'evento handleButtonClick all'immagine, e non al button, allora quando clicchiamo su di essa 
viene stampato come primo valore il link dell'immagine (ovvero l'event.target.src, a cui è indirizzato l'evento clic), 
mentre il secondo valore restituito sarà dato solo dall'elemento img, e non dal button*/ 