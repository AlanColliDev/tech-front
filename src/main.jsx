import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/Index.css'
import { AlumnoContextProvider } from './context/AlumnoContextProvider';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import { FormAlumno } from './FormAlumno';

// const router = createBrowserRouter([
	const router = createHashRouter([
	{
		path:'/store/:matricula',
		element: <FormAlumno />
	},
	{
		path:'/store',
		element: <FormAlumno />
	},
	{
		path:'/',
		element: <App />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<AlumnoContextProvider>
			<RouterProvider router={router} />
		</AlumnoContextProvider>
	// </React.StrictMode>,
)
