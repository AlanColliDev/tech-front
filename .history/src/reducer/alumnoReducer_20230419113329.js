import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = ( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		return getAllAlumno().then(resp => console.log('acolli', resp));	
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