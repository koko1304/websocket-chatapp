export default (state = false, { type, payload }) => {
	if (type === "SET_TYPING") {
		return payload;
	}

	return state;
};
