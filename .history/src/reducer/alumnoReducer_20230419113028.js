import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = async( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		await getAllAlumno().then((resolve) => {
			return resolve
		});
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