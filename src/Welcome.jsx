
export function Welcome ({name, age}) {
  return (
  <div>             
    <p>Welcome {name}!</p>
    {age > 18 && <p>Your age is <strong>{age}</strong></p>}
    {age !== null && <p>Your age is <strong>{age}</strong></p>}
    {(age > 18 && age < 65) && <p>Your age is <strong>{age}</strong></p>}
    {(age > 18 && name === "John") && <p>Your age is <strong>{age}</strong></p>}
  </div>
  )                                        
}