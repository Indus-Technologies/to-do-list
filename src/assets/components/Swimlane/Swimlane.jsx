import "./Swimlane.css";

const Swimlane = (props) => {
    return <div className="Swimlane">
        <h3>{props.title}</h3>
        {props.children}
    </div>
}

export default Swimlane;