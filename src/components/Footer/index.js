import React from 'react'
import './style.css'

const footer = () => {
    return (
        <footer>
            <p>&copy; Designed and Developed by <a href="https://jordanalamilla.ca">Jordan Alamilla</a> { (new Date()).getFullYear() }</p>
            <p>Ipsum Data Provided by <a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a></p>
        </footer>
    )
}

export default footer