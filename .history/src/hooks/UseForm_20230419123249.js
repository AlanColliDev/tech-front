import { useEffect, useState } from "react"

export const useForm = (initialForm) => {
	
	const [formstate, setFormState] = useState(initialForm);

	const HandleInputChange = ({event, customValue}) => {
		if(!(event.target.value.length > 0)) return;
		const {name, value} = event.target;
		setFormState({
			...formstate,
			[name]: customValue || value
		});
	};
	return {
		formstate,
		HandleInputChange
	}
}
