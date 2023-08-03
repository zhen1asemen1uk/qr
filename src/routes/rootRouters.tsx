import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

import { Qr } from "../pages/Qr";
import MainLayout from "../components/reusable/Layout";

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
		element: <MainLayout>{el.element}</MainLayout>,
		errorElement: <ErrorPage />,
	}))
);
