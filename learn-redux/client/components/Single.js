import React from "react";
import Comments from "./Comments";
import Photo from "./Photo";

const Single = (props) => {
	const { postId } = props.params;
	const i = props.posts.findIndex((post) => post.code === postId);
	const post = props.posts[i];
	const postComments = props.comments[postId] || [];

	return (
		<div className="single-photo">
			<Photo key={i} idx={i} {...props} post={post} />
			<Comments postComments={postComments} {...props} />
		</div>
	);
};

export default Single;
