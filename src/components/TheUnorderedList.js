import React, {useContext} from 'react'
import { ListContext } from '../context/ListContext';
import TheListComponent from './TheListComponent';
import { v4 as uuid } from 'uuid';


const TheUnorderedList = () => {
    const {questions} = useContext(ListContext);

    return (  
        <ul className='theunorderedlist'>   
                            {
                                      questions.map(question =>  (<TheListComponent question={question} id={uuid()}></TheListComponent>))
                            }
        </ul>
    );
}
 
export default TheUnorderedList;