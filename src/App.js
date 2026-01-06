import { useState } from "react";
function App() 
{
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const deleteTask=(indexToDelete)=>{
    setTasks(tasks.filter((_, index)=>index!==indexToDelete));
  };
  return (
    <div className="container"
      style={{
              minHeight: "100vh", 
              width: "100%",
              backgroundColor: "rgb(36, 44, 69)",
              color: "lightsteelblue",
              textAlign: "center",
            }}
    >
      <div className="heading">
        <h1 style={{marginTop: "100px"}}>TO-DO</h1>
        <input type="text" placeholder="Enter a task" 
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{marginRight:"30px"}}
        />
        <button 
          onClick={()=>{
            setTasks([...tasks, { text: task, done: false }]);
            setTask("");
          }}>Add
        </button>
      </div>
        <ul>
          <p style={{color: "black" }}><b>TASKS</b></p>
          {tasks.map((value, index)=>(
            <li key={index}>
              <span onClick={()=> {
                const updatedTasks=[...tasks];
                updatedTasks[index].done=!updatedTasks[index].done;
                setTasks(updatedTasks);
              }}
              style={{
                textDecoration: value.done?"line-through":"none",
                cursor: "pointer",
              }}>{value.text}
              </span>
            <button onClick={()=>deleteTask(index)}
            style={{marginLeft: "10px"}}
            >X
            </button></li>
        ))}
        </ul>
      
    </div>
  );
}

export default App;
