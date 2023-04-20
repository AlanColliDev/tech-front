
const BASE_URL = 'https://techtest-production-6c97.up.railway.app';
export const getAllAlumno = async () => {
	const response = await fetch(`${BASE_URL}/alumno`, {
		method: 'GET',
		headers: {
			Accept: 'application.json',
			'Content-Type': 'application/json'
		}
	});

	const data = response.json();
	return data;
}