import React from 'react'
import Jumbotron from '../../Components/Jumbotron/Jumbotron'
import Sectionone from '../../Components/Sectionone/Sectionone'
import Sectiontwo from '../../Components/Sectiontwo/Sectiontwo'

function home() {
    return (
        <div>
            <Jumbotron />
            <Sectionone/>
            <Sectiontwo/>
        </div>
    )
}

export default home
