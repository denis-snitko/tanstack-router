import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<hr />
			<main className="p-2">
				<Outlet />
			</main>
		</>
	),
});