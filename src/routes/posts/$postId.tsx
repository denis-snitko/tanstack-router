import { createFileRoute } from "@tanstack/react-router";
import SinglePost from "../../pages/SinglePost";
import { Post } from "../../types";

let post: Post;

async function fetchPost(postId: string) {
	try {
		const response = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${postId}`,
		);
		const data = await response.json();
		post = { ...data };
	} catch (error) {
		console.error(error);
	}
}

export const Route = createFileRoute("/posts/$postId")({
	loader: async ({ params }: { params: { postId: string } }) => {
		return fetchPost(params.postId);
	},
	component: () => <SinglePost post={post} />,
	staleTime: 30_000,
});
