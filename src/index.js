import * as React from 'react'
import ReactDOM from 'react-dom'
import {CountDisplay, Counter} from './count'
import {CountProvider} from './count-context'

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <Counter />
    </CountProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
