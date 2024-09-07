import { Link } from "@tanstack/react-router";
import { FC } from "react";

// interface IHeaderProps {}

const Header: FC = () => {
	return (
		<header className="p-2 flex gap-2">
			<Link to="/" className="[&.active]:font-bold">
				Home
			</Link>
			<span>|</span>
			<Link to="/about" className="[&.active]:font-bold">
				About
			</Link>
			<span>|</span>
			<Link to="/posts" className="[&.active]:font-bold">
				Posts
			</Link>
		</header>
	);
};

export default Header;
