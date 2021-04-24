import React from 'react';




import './course-grade-gender.style.css';

const CourseGradeGender = (props) => {
    return(
        <div className="course-grade-gender-container">
            <table>
            <tr>
                <td className="student">{props.course.student}</td>{
            props.course.grade <= 3
            ?
            <td className="grade">{props.course.grade}</td>
           :
           <td className="course">{props.course.grade}</td>
                
            }    
              {
             props.course.gender  === "Man"
             ?
             
                
                     <td><img src="img/hombre.png" alt=""/></td>
                 
           
             
             :
             <img src="img/mujer.png" alt=""/>  
            }  
             </tr>
            
             </table>
               
            
        </div>
    );
}

export default CourseGradeGender;