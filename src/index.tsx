import React from 'react';
import { render } from 'react-dom';

type AppProps = { message: string }; /* could also use interface */
const App = ({ message }: AppProps) => <div>{message}</div>;

render(<App message="Michael Koshakow" />, document.getElementById('root'));
