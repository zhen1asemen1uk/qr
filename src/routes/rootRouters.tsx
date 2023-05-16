import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage";

import MainLayout from "../reusable/Layout";

import { Qr } from "../pages/Qr";

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
