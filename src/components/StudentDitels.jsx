import React from 'react';
import { useParams } from 'react-router-dom';

const StudentDitels = () => {
    const {course_id,course_name} = useParams()
    console.log(useParams);
    return (
        <div>
            <h1>{course_id}</h1>
            <h1>{course_name}</h1>
        </div>
    );
};

export default StudentDitels;