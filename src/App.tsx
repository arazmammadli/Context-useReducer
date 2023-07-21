import './App.css'
import TodoAdd from './components/TodoAdd'
import TodoList from './components/TodoList'
import Header from './layout/Header'
function App() {

  return (
    <div className="w-full min-h-screen bg-[#1a1a1a]">
      <Header />
      <div className="w-full relative -top-7">
        <div className="max-w-[46rem] mx-auto">
          <div className="w-full mb-16">
            <TodoAdd />
          </div>
          <TodoList/>
        </div>
      </div>
    </div>
  )
}

export default App
