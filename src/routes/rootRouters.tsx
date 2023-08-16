import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

import MainLayout from "../components/reusable/Layout";
import Loader from "../components/reusable/Loader";

const Qr = lazy(() => import("../pages/Qr"));

const arrPathsAndComponents = [
	{
		path: `/`,
		element: <Qr />,
	},

	{ path: `/error`, element: <ErrorPage /> },
];

export const routers = createBrowserRouter(
	arrPathsAndComponents.map((el) => ({
		path: el.path,
		element: (
			<MainLayout>
				<Suspense fallback={<Loader />}>{el.element}</Suspense>
			</MainLayout>
		),
		errorElement: <ErrorPage />,
	}))
);
