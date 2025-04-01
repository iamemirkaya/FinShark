import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app component', () => {
  render(<App />);
  // Uygulamanızda gerçekten var olan bir öğeyi arayın
  // Örneğin, bir başlık veya arama kutusu
  const appElement = screen.getByRole('textbox'); // Veya başka bir uygun sorgu
  expect(appElement).toBeInTheDocument();
});