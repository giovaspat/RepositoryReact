import { useState } from "react";

export function Container ({title, children}) {
  const [collapsed, setCollapsed] = useState(false)

  function handleToggleCollapse () {
    setCollapsed(collapsed=> !collapsed)
  }

  return (
    <div className="container">
        <div className="title-container">{title} <button onClick={handleToggleCollapse}>View contents</button></div>
        {collapsed && <div className="children-container">{children}</div>}
    </div>
  )
}