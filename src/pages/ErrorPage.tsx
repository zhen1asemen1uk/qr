import { Link, useRouteError } from "react-router-dom";

import { Col, FlexBlock } from "../styles/styles";
import Loader from "../components/reusable/Loader";
import { FC } from "react";

interface RouteError {
	status: string;
	message: string;
	location: string;
}

const ErrorPage: FC = () => {
	const error = useRouteError() as RouteError;
	console.error(error && error);

	return (
		<Col ai='center' jc='space-between' h='100vh'>
			<h1>Oops!</h1>

			<Loader />

			<p>Sorry, an unexpected error has occurred.</p>
			<FlexBlock c='red'>
				{error ? error?.status || error?.message : ``}
			</FlexBlock>
			<p>
				<Link to={`/`}>Go main</Link>
			</p>
		</Col>
	);
};

export default ErrorPage;
