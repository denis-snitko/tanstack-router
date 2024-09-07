import { FC } from "react";
import { Post } from "../types";
import { Link } from "@tanstack/react-router";

interface ISinglePostProps {
	post: Post;
}

const SinglePost: FC<ISinglePostProps> = ({ post }) => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Single Post (ID: {post.id})</h1>
			<h2 className="text-xl font-bold mb-2">{post.title}</h2>
			<p className="mb-4">{post.body}</p>
			<hr className="my-4" />
			<Link to="/posts" className="border px-4 py-2">
				&larr; Back to Posts
			</Link>
		</div>
	);
};

export default SinglePost;
