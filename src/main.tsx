import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  console.error("Elemento de contêiner não encontrado!");
}
