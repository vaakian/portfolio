import { memo, useDeferredValue, useState } from 'react'

// 通过React.memo优化，text不变时，返回缓存的渲染结果。
const SlowComponent = memo(({ text }: { text: string }) => {
  const now = Date.now()
  while (Date.now() - now < 500) {
    // do nothing
  }
  return <div>{text}</div>
})

SlowComponent.displayName = 'SlowComponent'

export default function DeferredInput() {
  const [text, setText] = useState('hello')
  const deferredText = useDeferredValue(text)
  return (
    <div style={{ border: '1px solid blue', padding: '5px', margin: '5px' }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p>{text !== deferredText ? 'loading' : 'done'}</p>
      <SlowComponent text={deferredText} />
    </div>
  )
}

