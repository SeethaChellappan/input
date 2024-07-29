import { React } from 'react';
import './App.scss';
import UserName from './components/UserName';

const App = (context) =>
	<div className="App">
		<UserName { ...context }/>
	</div>;

export default App;
