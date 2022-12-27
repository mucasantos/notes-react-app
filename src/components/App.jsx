import Card from "../components/Card"
import Footer from "../components/Footer"
import Header from "../components/Header"
import notes from '../notes'
import React from "react"



function getNotes(note) {

    return <Card
        title={note.title}
        content={note.content}
    />
}

function App() {
    return (
        <div>
            <Header></Header>
            {notes.map(getNotes)}
            <Footer></Footer>
        </div>
    )

}

export default App