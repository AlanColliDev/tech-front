import React from 'react'
import ReactDOM from 'react-dom/client'
import <App></App> from './App'
import './assets/Index.css'
import { AlumnoContextProvider } from './context/AlumnoContextProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<AlumnoContextProvider>
			<App />
		</AlumnoContextProvider>
	// </React.StrictMode>,
)
