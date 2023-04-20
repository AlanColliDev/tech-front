import { getAllAlumno } from '../services/alumno.js';

export const AlumnoReducer = async( state, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		await getAllAlumno().then(resp => {
			console.log(resp);
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