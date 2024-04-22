import { useState } from 'react';
import './App.css';

const AddTask = ({ addTask }) => {
	const [value,setValue] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		if (value.length > 0) {
			addTask(value);
		}
		setValue("");
	}
	return (
	  <form onSubmit={handleSubmit}>
		<input
		  type="text"
		  value={value}
		  placeholder="Enter a value"
		  onChange={e => setValue(e.target.value)}
		/>
		<button>Add</button>
	  </form>
	);
}

export default AddTask
