import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = async( initialState, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		console.log('entra...?')
		await getAllAlumno().then(response => {
			console.log('ya se debio cargar??', response)
		});
		return {some: 'xx'}
	}

};