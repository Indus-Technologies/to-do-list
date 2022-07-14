import "./Swimlane.css";
//@ts-ignore
import {Droppable} from "react-beautiful-dnd";

const Swimlane = (props) => {
    return <div className="Swimlane">
        <h3>{props.title}</h3>
        {props.children}
        {/* <Droppable droppableId={props.title}>
            {(provided) => {
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    {props.children}
                </div>
            }}
        </Droppable> */}
    </div>
}

export default Swimlane;