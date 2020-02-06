import React from "react";
import { connect } from "react-redux";

const ChatList = ({ messages, typing, typingNickname }) => {
	return (
		<div id="chat-list" className="bg-light mb-4 p-3" style={{ height: "250px", overflowY: "auto" }}>
			<ul className="list-group">
				{messages.map(({ nickname, message }, index) => {
					return (
						<li key={index} className="list-group-item mb-3">
							<strong>{nickname}: </strong>
							{message}
						</li>
					);
				})}
				<li className={`list-group-item text-muted ${!typing ? "d-none" : ""}`}>{typingNickname} is typing...</li>
			</ul>
		</div>
	);
};

export default connect(({ messages, typing, typingNickname }) => ({ messages, typing, typingNickname }))(ChatList);
