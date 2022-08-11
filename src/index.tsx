import { createRoot } from 'react-dom/client';
import App from './App';
const container = document.getElementById('root') as Element;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
