import { Sandpack } from '@codesandbox/sandpack-react'
const code = `import Counter from './Counter'
export default function App() {
  return (
    <div>
      <h1>Hello Vaakian!</h1>
      <Counter />
    </div>
    )
}`

const counter = `import { useState } from 'react'
export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You clicked {count} times 🎉</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>{Array.from({ length: count }, () => '🍌')}</p>
    </div>
    )
}`

export default function App() {
  return (
    <Sandpack
      template="react"
      files={{
        'App.js': code,
        'Counter.js': counter,
      }}
    />
  )
}
