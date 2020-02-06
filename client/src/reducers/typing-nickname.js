export default (state = "", { type, payload }) => {
	if (type === "SET_TYPING_NICKNAME") {
		return payload;
	}

	return state;
};
