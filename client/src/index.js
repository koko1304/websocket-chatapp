import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import reduxStore from "./redux-store";

import ChatList from "./containers/chat-list";
import ChatForm from "./containers/chat-form";

const App = () => {
	return (
		<Provider store={reduxStore}>
			<div id="chat-window" className="container">
				<div className="py-5">
					<h1 className="h2">Legend Chat App</h1>
					<hr />
					<ChatList />
					<ChatForm />
				</div>
			</div>
		</Provider>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
