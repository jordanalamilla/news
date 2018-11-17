import React from 'react'
import './style.css'

const footer = () => {
    return (
        <footer>
            <p>&copy; Designed and Developed by Jordan Alamilla { (new Date()).getFullYear() }</p>
            <p>Ipsum Data Provided by <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></p>
        </footer>
    )
}

export default footer