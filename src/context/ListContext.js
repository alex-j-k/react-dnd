import React, { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';


export const ListContext = createContext();

const ListContextProvider = (props) => {
    const [questions, setQuestions] = useState([
        {question: 'Place in order from north to south...' , toptext:'Highest Latitude', bottomtext:'Lowest Latitude', corrAnswer: ['Berlin','Bristol','Brussels', 'Beijing'], id: uuid() },
        {question: 'Place in order from east to west...' ,toptext:'Most easterly', bottomtext:'most westerly', corrAnswer: ['Havana','Miami','Panama City', 'New York'], id: uuid()},
        {question: 'Place in distace from London' , toptext:'Closest', bottomtext:'Furthest', corrAnswer: ['reykjavic','St Johns','Aqaba','baku'], id: uuid()}
    ]);

    // FUNCTION TO SHUFFLE CORRET ANSWER ARRAY
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
          array[j] = temp;
    }return array};

    return(
        <ListContext.Provider value={{questions, shuffleArray}}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContextProvider