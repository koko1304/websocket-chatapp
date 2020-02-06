import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

import { setMessage, setTyping, setNickname, setTypingNickname } from "../actions";

class ChatForm extends Component {
	componentWillMount() {
		this.socket = io("http://localhost:3000");

		this.socket.on("message", data => {
			this.props.setMessage(data);
		});

		this.socket.on("typing", data => {
			this.props.setTyping();

			this.props.setTypingNickname(data);
		});
	}

	handleSubmit = values => {
		this.socket.emit("message", values);
	};

	handleNickname = (event, newValue) => {
		this.props.setNickname(newValue);
	};

	handleMessage = (event, newValue) => {
		if (newValue) {
			return this.socket.emit("typing", this.props.nickname);
		}
	};

	createInputField({ meta: { touched, error, invalid }, input }) {
		return (
			<div className="form-group">
				<input placeholder="Nickname" type="text" className={`form-control ${touched && invalid ? "is-invalid" : ""}`} {...input} />
				<p className="invalid-feedback">{error}</p>
			</div>
		);
	}

	createTextareaField({ meta: { touched, error, invalid }, input, disable }) {
		return (
			<div className="form-group">
				<textarea disabled={disable} placeholder="Message" rows="5" type="text" className={`form-control ${touched && invalid ? "is-invalid" : ""}`} {...input} />
				<p className="invalid-feedback">{error}</p>
			</div>
		);
	}

	render() {
		const { invalid, pristine } = this.props;

		return (
			<div id="chat-form">
				<form className="p-3 bg-light" onSubmit={this.props.handleSubmit(this.handleSubmit)}>
					<Field name="nickname" onChange={this.handleNickname} component={this.createInputField} />
					<Field disable={!this.props.nickname} onChange={this.handleMessage} name="message" component={this.createTextareaField} />
					<button disabled={invalid || pristine} className="btn btn-primary w-100" type="submit">
						SEND MESSAGE
					</button>
				</form>
			</div>
		);
	}
}

function validation(values) {
	const errors = {};

	if (!values.nickname) {
		errors.nickname = "Nick name is required";
	}

	if (!values.message) {
		errors.message = "Message can not be empty";
	}

	return errors;
}

export default reduxForm({
	form: "chatForm",
	validate: validation
})(connect(({ nickname }) => ({ nickname }), { setMessage, setTyping, setNickname, setTypingNickname })(ChatForm));
