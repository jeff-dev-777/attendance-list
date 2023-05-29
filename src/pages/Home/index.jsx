import react, { useState, useEffect } from 'react'
import styles from './styles.css'
import { Card } from '../../Components/Card'

export const Home = () => {

    const [studentName, setStudentName] = useState()
    const [students, setStudents] = useState([])
    const [user, setUser] = useState({name: '', avatar: ''})

    function handleAddStudents () {
        const newStudents = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"

            })
        }

        setStudents(prevState => [...prevState, newStudents])
    }

    useEffect(() => {
        fetch('https://api.github.com/users/jeff-dev-777')
        .then(response => response.json())
        .then(data => {
            setUser({
                name: data.name,
                avatar: data.avatar_url
            })
        })
    }, []);

    return ( 
        <div className="container">
            <header>

                <h1>Lista de presença</h1>
                <div>
                    <strong>{user.name}</strong>

                    <img src={user.avatar} 
                    alt="foto jefferson"
                    />

                </div>

            </header>
           

            <input 
            type="text" 
            placeholder="digite seu nome completo" 
            onChange={e => setStudentName(e.target.value)}
            />

            <button onClick={handleAddStudents}>
                Adicionar
            </button>
    
            
            {
                students.map(student => 
                <Card 
                    key={student.time} 
                    name={student.name} 
                    time={student.time} 
                />)
            }
            
        </div>
     );
}
 
