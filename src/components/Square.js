import React from 'react';
const styleSquare = {
    border:'2px double red',
    background:'light-red',
    padding:'0px',
    float:"left",
    width:'150px',
    height:'150px',
    textAlign:'center',
    fontSize:'100px',
    fontWeight:'1000',
    cursor:'pointer'
}
const Square = (props) => {
    console.log(props)
    return (
        <button onClick={()=>props.openCard(props.card.id, props.card.img)}
            style={styleSquare}>
            {props.card.isOpen ? props.card.img : ''}
        </button>
    );
};
export default Square;