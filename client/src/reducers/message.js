export default (state = [], { type, payload }) => {
	if (type === "SET_MESSAGE") {
		return [...state, payload];
	}

	return state;
};
