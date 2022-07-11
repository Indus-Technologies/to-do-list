import "./Card.css"

interface Props {
    name: string;
    description: string;
    dueDate: string;
    finished: boolean;
};

const Card: React.FC<Props> = ({name, description, dueDate, finished}) => {

    return (

        <div>

            <b>
                {name}
                {description}
                {dueDate}
                {finished}
            </b>

        </div>
        
    
    );

}

export default Card;