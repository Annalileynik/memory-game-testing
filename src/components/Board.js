import React from 'react';
import Square from "./Square";

const boardStyle = {
    border: '4px double red',
    margin: '0 auto',
    width: '900px',
    height: '600px',
    display: 'grid',
    gridTemplateColumns:'auto auto auto auto auto auto'
}
const Board = (props) => {

    return (
        <div style={boardStyle}>

            {
                props.board.map(el=>
                <Square
                key={el.id}
                card={el}
                openCard={props.openCard}/>)
            }
        </div>
    );
};

export default Board;