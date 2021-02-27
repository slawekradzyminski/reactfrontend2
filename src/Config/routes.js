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
		isPrivate: false,
	},
	{
		path: '/add-user',
		component: AddUserComponent,
		isPrivate: false,
	},
	{
		path: '/edit-user',
		component: EditUserComponent,
		isPrivate: false,
	},
	{
		path: '/*',
		component: NotFound,
		isPrivate: true,
	},
];

export default routes;
