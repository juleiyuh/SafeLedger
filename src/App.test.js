// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SafeLedger title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SafeLedger/i);
    expect(titleElement).toBeInTheDocument();
});
