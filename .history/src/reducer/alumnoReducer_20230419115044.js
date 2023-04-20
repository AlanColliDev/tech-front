import { getAllAlumno } from '../services/alumno.js';

export const alumnoReducer = ( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		return getAllAlumno().then(resp => console.log('hhello there'));	
	}

	if(type === '@get-all-success')
	{
		return {
			...state,
			isLoading: false,
			error: null,
			data: payload
		}
	}

};