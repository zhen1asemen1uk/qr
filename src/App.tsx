import { RouterProvider } from "react-router-dom";
import { routers } from "./routes/rootRouters";

function App() {
	return <RouterProvider router={routers} />;
}

export default App;
