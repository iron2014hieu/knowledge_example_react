import React, { useState } from 'react'
import Student from '../components/Student';
import Input from '../components/Input'
import { Redirect } from 'react-router-dom';
import { paths } from '../App';
import useQuery from '../hooks/useQuery'

function StudentManagement({ isLogged }) {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [currentStudent, setCurrentStudent] = useState(null)
    const [students, setStudents] = useState([]);

    const query = useQuery()

    console.log(query)
    const handleChange =
        setFunc => value => setFunc(value)
    const handleSubmit = e => {
        e.preventDefault()
        if (name !== '' && age !== '') {
            setStudents(prevStudent => [...prevStudent, {
                id: new Date().toISOString(),
                name,
                age
            }])
            setName('')
            setAge('')
        }
    }
    const handleDelete = id => {
        const index = students.findIndex(student => student.id === id)
        const _students = [...students]
        _students.splice(index, 1)
        setStudents(_students)
    }
    const handleStartUpdate = id => {
        const student = students.find(student => student.id === id)
        setCurrentStudent(student)
        setName(student.name)
        setAge(student.age)
    }
    const handleUpdate = () => {
        if (name !== '' && age !== '') {
            const _student = students.map((student) => {
                if (student.id === currentStudent.id)
                    return {
                        id: student.id,
                        name,
                        age
                    }
            }
            )
            setStudents(_student)
            handleBack()
        }
    }
    const handleBack = () => {
        setName('')
        setAge('')
        setCurrentStudent(null)
    }
    if (isLogged === false) {
        return <Redirect to={paths.register} />
    }
    return (
        <div>
            <h2>student management</h2>
            <form action="mb-3" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <Input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={handleChange(setName)}
                        placeholder="Enter Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">
                        Age:
                    </label>
                    <Input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={handleChange(setAge)}
                        id="age"
                        placeholder="Enter Age" />
                </div>
                {currentStudent
                    ? (<div>
                        <button onClick={() => handleUpdate()} className="btn btn-primary" type="button">Edit</button>
                    </div>)
                    : <div>
                        <button className="btn btn-success" type="submit">Add</button>
                    </div>}
            </form>
            <ul className="list-group mt-4">
                {students.map(student =>
                    <Student
                        handleStartUpdate={handleStartUpdate}
                        handleUpdate={handleUpdate}
                        handleBack={handleBack}
                        handleDelete={handleDelete}
                        key={student.id}
                        currentStudent={currentStudent}
                        student={student} />)}
            </ul>
        </div>
    )
}

export default StudentManagement
