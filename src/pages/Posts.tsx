import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { Post } from "../types";

interface IPostsProps {
	posts: Post[];
}

const Posts: FC<IPostsProps> = ({ posts }) => {
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Posts</h1>
			<ul>
				{posts?.map((post: Post) => (
					<li key={post.id}>
						<Link
							to={`/posts/${post.id}`}
							className="hover:text-blue-500 transition"
						>
							{post.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Posts;
