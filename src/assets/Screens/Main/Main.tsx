import "./Main.css";
import Swimlane from "../../components/Swimlane/Swimlane";
import Card from "../../components/Cards/Card";
// @ts-ignore
import DatePicker from "react-datepicker";
import { useState } from "react";


const MainScreen = () => {
    const [addNewMenu, setAddNewMenu] = useState(true);
    const [startDate, setStartDate] = useState(new Date());

    return <div>
        <div className="MainContainer">
            <div className="header"></div>
            <div className="SwimlaneContainer">
                <Swimlane title="Low Priority">
                    <Card name = "Finn" description="Bakin pancakes" dueDate="yesterday" finished={false}></Card>
                </Swimlane>
                <Swimlane title="Medium Priority"></Swimlane>
                <Swimlane title="High Priority"></Swimlane>
                <Swimlane title="Finished"></Swimlane>
            </div>
        </div>
        <div className={addNewMenu ? "addNewMenuOverlay" : "addNewMenuOverlay hidden"}>
            <div className="addNewMenuForm">
                <h1>Create New Task</h1>
                <input type="text" placeholder="Task Name"></input>
                <textarea placeholder="Task Description"></textarea>
                <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} placeholderText="10/12/2022"></DatePicker>
            </div>
        </div>
    </div>
}

export default MainScreen;