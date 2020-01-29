import React, { Component } from 'react'
import Header from "./Header"
import Footer from "./Footer"

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                children here
                <Footer />
            </div>
        )
    }
}

export default BaseLayout
