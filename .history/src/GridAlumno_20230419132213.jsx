import { useAlumno } from './hooks/useAlumno';

export const GridAlumno = () => {

	const { alumnos } = useAlumno();
	console.log(alumnos)

	return (
		<>
			<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
				<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900">Team</th>
							<th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-100 border-t border-gray-100">
						
					</tbody>
				</table>
			</div>

		</>
	)
}
