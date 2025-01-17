import { React } from 'react';

const Password = (context) => {
	const { state: { password }, actions: { setPassword }} = context;

	return <div>
		<label>Password:</label>
		<input
			type="password"
			placeholder="Enter the password"
			value={ password }
			onChange={ (event) => setPassword(event.target.value) }
		/>
	</div>;
};

export default Password;
