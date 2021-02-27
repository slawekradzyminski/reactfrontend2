import Login from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/NotFound';
import ListUserComponent from "../Pages/ListUserComponent";
import AddUserComponent from "../Pages/AddUserComponent";
import EditUserComponent from "../Pages/EditUserComponent";

const routes = [
	{
		path: '/login',
		component: Login,
		isPrivate: false,
	},
	{
		path: '/dashboard',
		component: Dashboard,
		isPrivate: true,
	},
	{
		path: '/users',
		component: ListUserComponent,
		isPrivate: true,
	},
	{
		path: '/add-user',
		component: AddUserComponent,
		isPrivate: true,
	},
	{
		path: '/edit-user',
		component: EditUserComponent,
		isPrivate: true,
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: true,
	},
];

export default routes;
