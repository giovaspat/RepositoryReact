export function Welcome ({name, age}) {
  return (
  <div>             
    <p>Welcome {name}!</p>
    {age > 18 && <p>Your age is <strong>{age}</strong></p>}
    {age <= 18 && <p>You are very young!</p>}
  </div>
  )                                        
}