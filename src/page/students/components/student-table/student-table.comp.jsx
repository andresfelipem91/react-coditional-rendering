import React from 'react';
import Course from '../course/course.comp';
import CourseGradeGender from '../student-grade-gender/course-grade-gender.comp';




import './student-table.style.css';

const StudentTable = () => {
    return(
        <div className="student-table-container">
           <div className="seach-input">
              <input type="text" placeholder="seach..."/> 
           </div>
           <Course courseName="Profundizacion 1"/>
            <table>
                <thead> 
                    <tr>
                        <th className="namerow">Student</th>
                        <th className="namerow">Grade</th>
                        <th className="namerow">Gender</th>
                    </tr>
                </thead>        
           
            </table>
           <CourseGradeGender  course={{
               student:"felipe",
               grade: 3.5,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Luisa",
               grade: 2.5,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Maria",
               grade: 4.5,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Diego",
               grade: 1.5,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Daniel",
               grade: 2.9,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Juanes",
               grade: 3.9,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Ledy Va  ",
               grade:4.1 ,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Viviana",
               grade: 3.2,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Camilo",
               grade: 2.3,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Daniel",
               grade: 3.9,
               gender:"Man",

           }} />
           <Course courseName="Sistemas Operativos 2"/>
           <table>
                <thead> 
                    <tr>
                        <th className="namerow">Student</th>
                        <th className="namerow">Grade</th>
                        <th className="namerow">Gender</th>
                    </tr>
                </thead>        
           
            </table>
           <CourseGradeGender  course={{
               student:"Paola ",
               grade: 3.5,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Marcelo",
               grade:2.6,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Santiago",
               grade:3.3,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Diana",
               grade: 4.1,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Sofia",
               grade: 4.3,
               gender:"Man",

           }} />
           <Course courseName="Analitica de datos"/>
           <table>
                <thead> 
                    <tr>
                        <th className="namerow">Student</th>
                        <th className="namerow">Grade</th>
                        <th className="namerow">Gender</th>
                    </tr>
                </thead>        
           
            </table>
           <CourseGradeGender  course={{
               student:"Julian",
               grade: 4.5,
               gender:"Man",

           }} />
           <CourseGradeGender  course={{
               student:"Carolina",
               grade: 3.5,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Cludia",
               grade: 2.9,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Sofia",
               grade: 1.8,
               gender:"Woman",

           }} />
           <CourseGradeGender  course={{
               student:"Angela",
               grade: 2.9,
               gender:"Woman",

           }} />
        </div>
    );
}

export default StudentTable;