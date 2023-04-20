
export const AlumnoReducer = (state = [], action) => {

	const { payload, type } = action
	if (type === '@get-all')
		return payload.data


	if (type === '@get-all-success')
		return {
			...state,
			isLoading: false,
			error: null,
			data: payload
		}

	if (type === '@add-new')
		return [
			...state,
			payload
		]

	if (type === '@edit-store')
	{
		const olds = state.filter(alumno => String(alumno.matricula).trim() !== String(payload.matricula).trim())
		// console.log('todos menos edit', olds)
		return [
			...olds,
			payload
		]
	}
		

	if (type === '@delete-store')
		return payload.data

};

export const initAlumnos = alumnos => {
	return {
		type: '@get-all',
		payload: alumnos
	}
}