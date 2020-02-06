export const setMessage = message => dispatch => {
	dispatch({
		type: "SET_MESSAGE",
		payload: message
	});

	dispatch({
		type: "SET_TYPING",
		payload: false
	});
};

export const setTyping = () => dispatch =>
	dispatch({
		type: "SET_TYPING",
		payload: true
	});

export const setNickname = nickname => dispatch =>
	dispatch({
		type: "SET_NICKNAME",
		payload: nickname
	});

export const setTypingNickname = nickname => dispatch =>
	dispatch({
		type: "SET_TYPING_NICKNAME",
		payload: nickname
	});
