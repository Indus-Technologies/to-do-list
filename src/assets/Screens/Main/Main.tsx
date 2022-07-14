import "./Main.css";
import Swimlane from "../../components/Swimlane/Swimlane";
import Card from "../../components/Cards/Card";
// @ts-ignore
import { useState } from "react";
import Calendar from 'react-calendar';
import toDoObject from "../../Interfaces/ToDoObject";
import toast, { Toaster } from 'react-hot-toast';
import dayjs from "dayjs";
//@ts-ignore
import {DragDropContext} from "react-beautiful-dnd"; 

const MainScreen = () => {
    const [addNewMenu, setAddNewMenu] = useState(false);
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDueDate, setsetNewDueDate] = useState(new Date());

    const [lowPriority, setLowPriority] = useState([]);
    const [medPriority, setMedPriority] = useState([]);
    const [highPriority, setHighPriority] = useState([]);
    const [finished, setFinished] = useState([]);

    return <DragDropContext onDragEnd={() => {}}>
        <Toaster position="bottom-center" />
        <div className="MainContainer">
            <div className="header">
                <h1>To Do:</h1>
                <div className="headerButtons">
                    <button className="headerButton" onClick={() => setAddNewMenu(true)}>Add new Item</button>
                    <button className="headerButton">Clear Finished Tasks</button>
                    <button className="headerButton">Clear All Tasks</button>
                </div>
            </div>
            <div className="SwimlaneContainer">
                <Swimlane title="Low Priority">
                    <Card name="Get Bitches" description="Taha gets none, so we must help him." dueDate={dayjs().add(0, "days")} finished={false}></Card>
                </Swimlane>
                <Swimlane title="Medium Priority"></Swimlane>
                <Swimlane title="High Priority"></Swimlane>
                <Swimlane title="Finished"></Swimlane>
            </div>
        </div>
        <div className={addNewMenu ? "addNewMenuOverlay" : "addNewMenuOverlay hidden"} onClick={(e) => {if(e.target === e.currentTarget) setAddNewMenu(false);}}>
            <div className="addNewMenuForm">
                <button className="exitNewMenuForm" onClick={() => setAddNewMenu(false)}>X</button>
                <h1>Create New Task</h1>
                <input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} type="text" placeholder="Task Name" className="newTitle" />
                <textarea value={newDescription} onChange={(event) => setNewDescription(event.target.value)} placeholder="Task Description" className="newDescription" />
                <Calendar className="calendar" onChange={setsetNewDueDate} value={newDueDate} />
                <button onClick={() => {
                    if(newTitle === "") {
                        toast.error("Couldn't add task: please include title");
                        return;
                    }

                    const newInput : toDoObject = {
                        name: newTitle,
                        description: newDescription,
                        dueDate: newDueDate,
                        finished: false
                    }


                    console.log(newInput);
                    setAddNewMenu(false);
                    setNewTitle("");
                    setNewDescription("");
                    setsetNewDueDate(new Date());
                    toast.success("Added new Task");
                }}>Create Task</button>
            </div>
        </div>
    </DragDropContext>
}

export default MainScreen;