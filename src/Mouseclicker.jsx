export function Mouseclicker () {
  function handleButtonClick(event) {
      console.log("Name attribute of this button is : ",event.target.name)
  }

   function handleImgClick(event){
    event.stopPropagation();
    console.log("Click on Image", event.target.src);
  }
  return (
    <div> 
      <button name="one" onClick={handleButtonClick}>
        <img onClick={handleImgClick} src="https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg" 
        width={20} height={20}/>Click here</button>
    </div>
  )
}

/*
Possiamo usare event.stopPropagation() per impedire che l'evento del figlio(img) risalga indietro nel DOM 
propagandosi anche al genitore (button). 
E questo ha come conseguenza il fatto che l'attributo "name" di button non venga stampato sulla console al click sull'immagine.
*/ 