import Container from "./components/Container";
import CreateLoginComponent from "./components/Login";
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>    
        <CreateLoginComponent />
      </div>  
    </div>
  );
}

export default App;
