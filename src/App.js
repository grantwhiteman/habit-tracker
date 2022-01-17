import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import Footer from './components/Footer'

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const title = 'Habit Tracker';
	const [tasks, setTasks] = useState([{
      text: "Make bed",
      day: "Everyday, 6am",
      reminder: true,
      id: 1
    }, {
      text: "Write in journal and make todo list",
      day: "Everyday, 6:01am",
      reminder: true,
      id: 2
    }, {
      text: "Make a shake and go gym",
      day: "Everyday, 6:20am",
      reminder: true,
      id: 3
    }
  ]);

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }
  //   getTasks()
  // }, [])

  // const fetchTasks = async () => {
  //   const res = await fetch('http://localhost:5000/tasks')
  //   const data = await res.json()
  //   return data
  // }

  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()
  //   return data
  // }

	const addTask = (task) => {
    // await fetch('http://localhost:5000/tasks', { (would need to be async)
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })
    // .then(res => res.json())
    // .then(data => setTasks([ ...tasks, data ]))
    
    const id = !tasks ? 0 : tasks.length ;
    const newTask = { id, ...task };
		setTasks([ ...tasks, newTask ]);
	};

	//Delete Task
	const deleteTask = async (id) => {
    // fetch(`http://localhost:5000/tasks/${id}`, { (would need to be async)
    //   method: 'DELETE'
    // })
		setTasks(tasks.filter(task => task.id !== id));
	};

	// Toggle Reminder
	const toggleReminder = (id) => { //would need to be async for below server
  //   const taskToToggle = await fetchTask(id)
  //   const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(updatedTask)
  //   })

		setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
	};

	return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={!showAddTask} title={title} />
        <Routes>
          <Route path='/react-portfolio/' element = {
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                ) : (
                  'You have no tasks to complete!'
                )}
              </>
            } 
          />
          <Route path='/react-portfolio/about' element={<About />} />          
        </Routes>
        <Footer />
      </div>
    </Router>
	);
}

export default App;
