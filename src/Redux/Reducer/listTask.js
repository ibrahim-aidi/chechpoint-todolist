// 1 importation
import {
     ADD_TASK,
     DELETE_TASK,
     DONE_TASK,
     EDIT_TASK,

} from "../ActionType/listTask";

// 2 initialState 

const initialState ={
     listTasks : [
      {id: Math.random(), text: "task1" , isDone: false},
      {id: Math.random(), text: "task2" , isDone: false},
   ],
    };

// 3 pure function  
const listReducer =(state = initialState, { type,payload}) => {
  switch (type) {
case ADD_TASK:
     return ( ...state, listTasks: [...state, payload]  };
case DELETE_TASK: 

  }
} 