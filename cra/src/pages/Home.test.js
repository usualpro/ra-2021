import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, } from 'react-router-dom';

import { Home } from './Home';
import Instance from '../instance';

test('renders Home title', () => {
    render(
        <Router>
            <Home />
        </Router>
    );
    const linkElement = screen.getByText(Instance.name);
    expect(linkElement).toBeInTheDocument();
});
