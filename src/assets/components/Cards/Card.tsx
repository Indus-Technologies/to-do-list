import "./Card.css"
import dayjs, {Dayjs} from "dayjs";
import { exportDefaultSpecifier } from "@babel/types";
// @ts-ignore
import {Draggable} from "react-beautiful-dnd";

interface Props {
    name: string;
    description: string;
    dueDate: Dayjs;
    finished: boolean;
};

const Card: React.FC<Props> = ({name, description, dueDate, finished}) => {
    let percentLeft : number = 0;
    if(dayjs(dueDate).diff(dayjs(), "week") > 1 && dayjs(dueDate).isAfter(dayjs())) {
        percentLeft = 100;
    } else if(dayjs(dueDate).diff(dayjs(), "week") > 1 && dayjs(dueDate).isBefore(dayjs())) {
        percentLeft = 0;
    } else {
        percentLeft = dayjs(dueDate).diff(dayjs(), "seconds") / (6048);
    }

    return <div className="card" style={{background: `radial-gradient(circle, #d9e969 ${percentLeft}%, #e44848)`}}>
            <h3 className="cardTitle">{name}</h3>
            <p className="cardDescription">{description}</p>
            <p className="cardDueDate">Deadline: {dayjs(dueDate).format("MM/DD/YYYY")}</p>
        </div>
}

export default Card;