import { getAllAlumno } from '../services/alumno.js';

export const AlumnoReducer = ( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		console.log('somee')
		return getAllAlumno().then(resp => resp);	
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