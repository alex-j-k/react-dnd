import React, {useContext, useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { ListContext } from '../context/ListContext';


const TheListComponent = ({question}) => {


//CONTXT
    const {shuffleArray} = useContext(ListContext);


//STATE
const [immutableCorrectAnswer, setImmutableCorrectAnswer] = useState([...question.corrAnswer]);
const [order, setOrder] = useState([...question.corrAnswer]);
const  [correct, setCorrect] = useState(false);
console.log(order.length);
console.log(order);
console.log(order);
console.log(order);


//SHUFFLE THE CORRECT ANSWER ARRAY AND SORE IN ORDER
useEffect(() => {
    setOrder(shuffleArray([...order]));
    return 
}, []);

useEffect(() => {
      for (let i =0; i<order.length; i++){
          if(order[i] !== immutableCorrectAnswer[i])
          {setCorrect(false); break } else {setCorrect(true)}
         
      }          

}, [order]);

const handleOnDragEnd = (result) => {
    console.log(result)

    if (!result.destination) return     console.log(order)    ;

    const items = Array.from(order);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setOrder(items);
}



    return ( 
               
                    // <li className="thelistcomponent" id={uuid()} >
                    //         <div className="question">{question.question}</div>
                    //         <div className="toptext">{question.toptext}</div>
                                    
                    //         <DragDropContext>
                    //         <Droppable droppableId="cards">
                    //         {(provided) => (
                    //                 <ul className="cards" {...provided.droppableProps} ref={provided.innerRef}>
                    //                         {newArray.map((answer, index) => {
                    //                         return (
                                           
                    //                         <Draggable Key={uuid()} draggableId={uuid()} index={index}>
                    //                              {(provided)=>(
                    //                                 <li className="answer" id={uuid()} {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>{answer}</li>
                    //                                 )};
                    //                         </Draggable>
                                            
                    //                         )
                    //                         })}
                    //                 </ul>
                    //                 )}
                    //         </Droppable>
                    //         </DragDropContext>

                    //         <div className="toptext" >{question.bottomtext}</div>
                    // </li>
                ////////////////////////////////////////
/////////////////////////////////


            <div className="thelistcomponent" id={uuid()} >
                    <div className="question">{question.question}</div>
                    <div className="toptext">{question.toptext}</div>
                            
                  
                                    <DragDropContext onDragEnd={handleOnDragEnd}>
                                            <Droppable droppableId="characters">
                                                {(provided) => (


                                                            <ul className="cards" {...provided.droppableProps} ref={provided.innerRef} id={uuid()}>
                                                                    {order.map((answer,index )=> {
                                                                    return (   
                                                                                <Draggable key={answer} draggableId={answer} index={index}>
                                                                                    {(provided) => (
                                                                                        <li className={`answer ${correct ? 'correct' : ''}`} 
                                                                                        id={answer}  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}  >{answer}</li>
                                                                                        )}
                                                                                </Draggable>
                                                                             );
                                                                    })}
                                                                 {provided.placeholder}
                                                            </ul>
                                                             )}
                                              </Droppable>
                                       </DragDropContext>
                                    
                    <div className="toptext" >{question.bottomtext}</div>
            </div>

     );
     
}

export default TheListComponent;