import { createRoot } from 'react-dom/client';
import { App as Root } from './App';

const element = document.querySelector('#root');

const root = createRoot(element).render(
  <Root />
)