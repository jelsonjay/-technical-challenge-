import React from 'react';
import ReactDOM from 'react-dom/client';
import NavRouter from './components/NavRouter';
import './styles/main.sass';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NavRouter />
	</React.StrictMode>
);
