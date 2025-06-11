import React, { useState } from "react";


//create your first component
const Home = () => {

	const [inputTodo, setInputTodo] = useState("");
	const [list, setList] = useState([]);
	const [count, setCount] = useState(0)
	
	function handleSubmit(event){
		event.preventDefault();
		if (inputTodo.trim() === ""){
			return alert("No tasks, add a task");
		};
		setList(prev => [...prev, inputTodo]);
		setInputTodo("");
		setCount(prev => (prev += 1))
	};

	function deleteTodo(indexToDelete) {
		setList(prev => prev.filter((_, index) => index !== indexToDelete));
		setCount(prev => (prev -= 1));
	}

	return (
		<div className="text-center">
			<h1 className="title">To do's</h1>
			<form onSubmit={handleSubmit}>
				<input className="border border-top-0"
				 type="text"
				 onChange={(e) => setInputTodo(e.target.value)}
				 value={inputTodo}
				 placeholder="What needs to be done?"/>
				<ul>
					{list.map((inputTodo, index) => (
						<li key={index}>{inputTodo}
						<span className="delete" onClick={() => deleteTodo(index)}>x</span>
						</li>
					))}
				</ul>
				<p className="itemCount">{count} items left</p>
				<button className="btn btn-primary">Add task</button>
			</form>
		</div>
	);
};

export default Home;
