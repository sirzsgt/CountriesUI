import { useState } from "react";

export const useForm = (initialState: any = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = (newValues = initialState) => setValues(newValues);

	const handleInputChange = ({
		target,
	}: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [target.name]: target.value });
	};

	return [values, handleInputChange, reset];
};