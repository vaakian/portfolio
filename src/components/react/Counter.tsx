import  { CSSProperties, useState } from 'react'

const style: CSSProperties = {
  border: '1px solid green',
  padding: '5px',
  margin: '5px'
}

export default function Counter({
  initialCount = 0, 
  step = 1
}) {
  const [count, setCount] = useState(initialCount)
  const increment = () => setCount(c => c + step)
  return (
    <div style={style}>
      <button onClick={increment}>count:{count}</button>
    </div>
  )
}

// A trick that could write less type annotation.