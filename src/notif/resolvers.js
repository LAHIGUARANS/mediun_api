import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUsers: (_) =>
			getRequest(URL, ''),
		//userById: (_, { id }) =>
		//	generalRequest(`${URL}/${id}`, 'GET'),
	},
	Mutation: {
		createUser: (_, { user }) =>
			generalRequest(`${URL}/new`, 'POST', user),
		//updateUser: (_, { id, user }) =>
		//	generalRequest(`${URL}/${id}`, 'PUT', user),
		//deleteUser: (_, { id }) =>
		//	generalRequest(`${URL}/${id}`, 'DELETE')
	}
};

export default resolvers;
