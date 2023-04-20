import { getAllAlumno } from '../services/alumno';

export const alumnoReducer = async( initialState, action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		return await getAllAlumno();
	}


};