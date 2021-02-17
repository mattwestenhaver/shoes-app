import "./App.css"
import Shoes from "./components/Shoes"
import Cart from "./components/Cart"

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Cart />
            </div>
            <div className="App-body">
                <Shoes />
            </div>
        </div>
    )
}

export default App
