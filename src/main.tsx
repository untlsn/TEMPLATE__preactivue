import { render } from 'preact';
import App from './app';
import 'virtual:windi.css';
import 'virtual:windi-devtools';
import { BrowserRouter } from 'react-router-dom';

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('app')!,
);
