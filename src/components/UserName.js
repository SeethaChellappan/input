import { React } from 'react';

const UserName = (context) => {
	const { state: { username }, actions: { setUserName }} = context;

	return <div>
		<label>Username:</label>
		<input
			type="text"
			placeholder="Enter the username"
			value={ username }
			onChange={ (event) => setUserName(event.target.value) }
		/>
	</div>;
};

export default UserName;
