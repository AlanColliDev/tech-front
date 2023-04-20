import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = async( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		console.log(payload)
		return [
			payload
		]
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