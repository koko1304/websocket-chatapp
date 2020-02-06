import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import messageReducer from "./message";
import typingReducer from "./typing";
import nicknameReducer from "./nickname";
import typingNicknameReducer from "./typing-nickname";

const rootReducers = combineReducers({
	form: formReducer,
	messages: messageReducer,
	typing: typingReducer,
	nickname: nicknameReducer,
	typingNickname: typingNicknameReducer
});

export default rootReducers;
