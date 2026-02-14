import './app.scss'
import Doc from './components/Doc'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import MacWindow from './components/windows/MacWindow'

function App() {
  return (
    <main>
      <Nav/>
      <Doc />
      <Github/>
    </main>
  )
}

export default App
