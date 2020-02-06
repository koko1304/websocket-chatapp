export default (state = "", { type, payload }) => {
	if (type === "SET_NICKNAME") {
		return payload;
	}

	return state;
};
