
import React ,{useState} from "react";
import { v4 } from 'uuid';
import myimg from "./images/To-Do.png" ;
import delimg from "./images/Vector.png";
import frameimg from "./images/Frame 7.png";



const TodoApp = () =>{

    // state

    const [tasks,setTasks] = useState([]);
    const [newtask,setNewTasks] = useState('');
    // const [ischecked,setIschecked] =useState(false);
    const [cureentscreen,setCurrentScreen] =useState("personal");
    const [personaltasks,setPersonalTasks] =useState([]);
    const [professionaltasks,setprofessionaltasks] =useState([]);
    

    //add task

    const addTask = () => {
        if (newtask.trim() !== "") {
          const newTaskObj = { id: v4(), note: newtask , ischecked:false };
          if (cureentscreen === "Personal") {
            setPersonalTasks([...personaltasks, newTaskObj]);
          } else {
            setprofessionaltasks([...professionaltasks, newTaskObj]);
          }
          setNewTasks("");
        }
      };
    //delete task
    const deleteTask = (id) => {
        if (cureentscreen === "Personal") {
          setPersonalTasks(personaltasks.filter((task) => task.id !== id));
        } else {
          setprofessionaltasks(professionaltasks.filter((task) => task.id !== id));
        }
      };
      //complete

      const handleComplete = (index) => {
        if (cureentscreen === "Personal") {
          const newTasks = [...personaltasks];
          newTasks[index].ischecked = !newTasks[index].ischecked;
          setPersonalTasks(newTasks);
        } else {
          const newTasks = [...professionaltasks];
          newTasks[index].ischecked = !newTasks[index].ischecked;
          setprofessionaltasks(newTasks);
        }
      };
    

       //switch screen
    const switchScreen=(screen)=>{
     setCurrentScreen(screen);
    }

    //clear all
    const clearAll = (tasks)=>{
        if (cureentscreen === "Personal") {
            setPersonalTasks([]);
          } else {
            setprofessionaltasks([]);
          }
    
    }


    return (
    <div style={style.div}>

        <div style={style.imgdiv}><img src={myimg} style={style.img}></img></div>
        <div style={style.section}>
            <div onClick={() => switchScreen("Personal")} style={style.personal} class="personal"><p5>Personal</p5></div>
            <div onClick={() => switchScreen("Professional")} style={style.professional} class="personal" ><p5>Professional</p5></div>
        </div>
        <input style={style.input} type="text"
        value={newtask}
        onChange={
            (e)=>{
             setNewTasks(e.target.value); 
            }
        }
        placeholder = "What do you wanna do ?"/>
        <button style={style.button} onClick={addTask}>ADD</button>
        <div style={style.notediv}>

            {(cureentscreen === "Personal" ? personaltasks : professionaltasks).map((task,index)=>(
        <label key={task.id}for="input">
        <input style={style.checkbox}type="checkbox" class="input" checked={task.ischecked}
                  onChange={() => handleComplete(index)}/>
         <span  style={task.ischecked ? style.completedTask:{}}>{task.note}</span>
        <button style={style.deletebtn} onClick={()=>deleteTask(task.id)}>
            <img src={delimg} style={style.imgbtn}></img>
            </button>
            <hr style={style.hr}></hr>
        </label>
            ))}

             <div style={style.footdiv}>
             <button style={style.btnfoot} onClick={clearAll}>
        <img style={style.frame} src={frameimg}></img>
        </button> 
            
              </div>
        </div>
       


    </div>
    
    );
}

//css

const style = {
    div :{
        width:"600px",
        height:"400px",
        margin:"50px auto",
        backgroundColor:"white",
        textAlign:"center",
        border:"1px solid wheat",
        
    },
    completedTask: {
      textDecoration: 'line-through',
      color:'gray',},
    personal:{
     cursor:"pointer"
    },
    professional:{
        cursor:"pointer",
       
    },
    hr:{
      width:"85%",
      height:"0.8px",
      backgroundColor:"#76B7CD"

    },
    checkbox:{
      marginRight:"15px",
      marginTop:"15px",
      borderRadius:"20px",
      cursor:"pointer",
      
    },
    frame :{
     width:"100px",
     height:"40px",
     border: "none",
     outline:"none",
     cursor: "pointer",
    
    },
    footdiv:{
      
      display:"flex",
      flexDirection:"row-Reverse",
      
      
    },
    btnfoot:{
        
        border:"none",
        outline:"none",
        background:"none",
        textAlign:"right"
   
    },
    imgbtn:{
         width:"13px",
         height:"13px"
    },
    notediv:{

        backgroundColor:"#F1ECE6",
        width:"80%", 
        margin:"5px auto",
        marginTop:"30px",
        border:"none",
        borderRadius:"15px",
        outline:"none",
        paddingLeft:"15px",
        textAlign:"left"
               
    },
    deletebtn: {
        border: "none",
        outline: "none",
        background:"none",
         marginRight:"10px",
         marginTop:"10px",
         padding:"10px",
        float:"right"
      },
    
    imgdiv:{
        backgroundColor:"#F1ECE6",
    },
    img :{
        width:"150px",
        height:"20px",
        textAlign:"center",
        marginTop:"10px"
        
    },
    deleteimg:{
      width:"40px",
      height:"20px",
    },
    section :{
        backgroundColor:"#F3F3F3",
        width:"100%",
        height:"25px",
        display:"flex",
        padding:"5px 0",
        flexDirection:"row",
        justifyContent:"space-around",
       

    },
    input :{
        backgroundColor:"#F1ECE6",
        width:"70%",
        padding:"10px ",
        marginTop:"20px",
        border:"none",
        borderRadius:"15px",
        outline:"none",
        paddingRight: "50px",
        

    },
    button:{
       marginLeft:"-44px",
       padding:"10px",
       borderRadius:"15px",
       border:"none",
       outline:"none",
       backgroundColor:"#76B7CD",
       color:"white",
       cursor:"pointer"
       
    }

}
export default TodoApp


