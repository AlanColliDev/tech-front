
export const AlumnoReducer = ( state = [], action ) => {
	
	const {payload, type} = action
	if(type === '@get-all')
		return payload.data


	if(type === '@get-all-success')
		return {
			...state,
			isLoading: false,
			error: null,
			data: payload
		}

	if(type === '@add-new')
		return [
			...state,
			payload
		]

	if(type === '@filter-store')
		/**
		 * Tengo duda de como filtrarlo para mostrarlo en pantalla, ya que este reduce me cabiara todo el estado
		 */

};

export const initAlumnos = alumnos => {
	return {
		type: '@get-all',
		payload: alumnos
	}
}