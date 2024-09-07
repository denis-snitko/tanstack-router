import { createFileRoute } from "@tanstack/react-router";
import Posts from "../../pages/Posts";
import { Post } from "../../types";

const fetchPosts = async () => {
	try {
		const response = await fetch("https://jsonplaceholder.typicode.com/posts");
		const data = await response.json();
		posts.push(...data);
	} catch (error) {
		console.error(error);
	}
};

const posts: Post[] = [];

export const Route = createFileRoute("/posts/")({
	loader: () => fetchPosts(),
	component: () => <Posts posts={posts} />,
	staleTime: 30_000,
});
