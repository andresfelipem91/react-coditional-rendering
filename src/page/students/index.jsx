import React from 'react';
import FilterableStudentTable from './components/filterable-student-table/filterable-student-table.comp';
import StudentTable from './components/student-table/student-table.comp';

const StudentsPage = () => {
    return(
        <div>
           <FilterableStudentTable />
           <StudentTable /> 
        </div>
        
    );
}

export default StudentsPage;