import { PopXProvider } from './context/PopContext';
import PopXApp from './page/PoPXApp';
import "./App.css";


export default function App() {

  return (
    <PopXProvider>
      <PopXApp />
    </PopXProvider>
  );
}

