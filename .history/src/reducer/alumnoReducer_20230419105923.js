import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = async( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		return {
			...state,
			isLoading: true,
			error: null,
			data: payload
		}
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