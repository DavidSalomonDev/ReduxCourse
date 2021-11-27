import React from "react";
import Single from "./Single";

const Comments = ({ postComments, params }) => {
	const commentElement = postComments.map((comment, idx) => {
		return (
			<div className="comment" key={idx}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment">&times;</button>
				</p>
			</div>
		);
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const { postId } = params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		console.log(postId, author, comment);
	};

	return (
		<div className="comment">
			{commentElement}
			<form
				ref="comment-form"
				className="comment-form"
				onSubmit={handleSubmit}
			>
				<input type="text" placeholder="author" />
				<input type="text" placeholder="comment" />
				<input type="submit" hidden />
			</form>
		</div>
	);
};

export default Comments;
