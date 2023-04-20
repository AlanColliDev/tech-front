
export const AlumnoReducer = ( state = [], action ) => {
	
	const {payload, type} = action
	console.log({payload})
	if(type === '@get-all')
	{
		return payload.data
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
		console.log([
			...state.data,
			payload
		])
		return [
			...state,
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