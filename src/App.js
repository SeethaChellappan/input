import { React } from 'react';
import './App.scss';
import UserName from './components/UserName';
import Password from './components/Password';

const App = (context) =>
	<div className="form-container">
		<UserName { ...context }/>
		<Password { ...context }/>
	</div>;

export default App;
