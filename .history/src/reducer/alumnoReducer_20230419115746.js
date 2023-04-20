import { getAllAlumno } from '../services/alumno.js';

export const AlumnoReducer = async( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		return await getAllAlumno();
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