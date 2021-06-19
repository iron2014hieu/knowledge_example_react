import React from 'react'
import PropsTypes from 'prop-types'
function Student({
    student,
    handleDelete,
    handleStartUpdate,
    currentStudent,
    handleBack,
}) {
    return (
        <li key={student.id} className="list-group-item">
            <span className="me-4">{`Name: ${student.name} Age: ${student.age}`}</span>
            <div className="btn-group fr">

                {currentStudent ? <button onClick={() => handleBack()} className="btn btn-dark">Back</button>
                    : <button
                        onClick={() => handleStartUpdate(student.id)}
                        className="btn btn-info me-1">Update</button>}
                <button
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
}
Student.PropsTypes = {
    student: PropsTypes.object.isRequired,
    handleDelete: PropsTypes.func.isRequired,
    handleStartUpdate: PropsTypes.func.isRequired
}
export default Student
