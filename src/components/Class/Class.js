import "./Class.css";
import React, {useState,useEffect} from 'react';
 
function Class (props)
{
    const [classInfo,setClassinfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"
    useEffect(() => 
    {
        const fetchData = async () => {
            const response = await fetch(url + props.name);
            const data  = await response.json();
            console.log(data);
            setClassinfo(data);
        }
        fetchData();
    },[props.name]);

    let info;
    if(classInfo.id)
    {

         info = <div className ='information'>
        <p id = 'title'> {classInfo.title} </p>
        <p id = 'department'>{classInfo.department_name}</p>
        <p id ='description' >{classInfo.description}</p>
        </div>
    }
    else
    {
        info = <p>Class Not Found</p>
    }
    return (    
        <div className ='class'>
            <p> 
            {props.name} :   
            </p>
            <div>
                {info}
            </div>
            
        </div>
    )
}
export default Class;