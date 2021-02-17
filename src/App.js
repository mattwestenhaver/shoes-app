import "./App.css"
import Shoes from "./components/Shoes"
import Cart from "./components/Cart"
import { ToastContainer } from "react-toastify"

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <Cart />
            </div>
            <div className="App-body">
                <Shoes />
            </div>
            <ToastContainer
                className="toast-alert"
                position="bottom-right"
                autoClose={2000}
                draggable={true}
            />
        </div>
    )
}

export default App
