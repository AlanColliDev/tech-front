
export const AlumnoReducer = ( state = [], action ) => {
	
	const {payload, type} = action

	if(type === '@get-all')
	{
		return payload
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

	if(type === '@add-new')
	{
		return [
			...state.data,
			payload
		]
	}

};

export const initAlumnos = alumnos => {
	return {
		type: '@get-all',
		payload: alumnos
	}
}