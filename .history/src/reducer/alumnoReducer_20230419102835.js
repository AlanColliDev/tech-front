import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = async( initialState, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		let data = []
		await getAllAlumno().then((resolve) => {
			data =resolve
		})
		return data
	}

};