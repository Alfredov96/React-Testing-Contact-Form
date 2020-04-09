import React from 'react';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('test something', () => {

const  { getByText } = render(<ContactForm />);
const linkElement = getByText(/firstname/i);

})
