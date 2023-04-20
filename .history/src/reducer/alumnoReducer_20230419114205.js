import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = ( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		return 10

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