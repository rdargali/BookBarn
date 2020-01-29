import React, { Component } from 'react'
import { Link, NavLink, } from "react-router-dom"

export class Header extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to ="/view">View All Books</Link></li>
                    <li><Link to ="/add">Add Books</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header
