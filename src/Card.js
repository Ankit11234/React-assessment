import React, { useState } from 'react'
import './Card.css'

const Card = ({ i }) => {
    const [input, setInput] = useState("");
    const [click, setClick] = useState(true);
    
    const submit = (e) => {
        e.preventDefault();
        i.tags.push(input);
        setInput("");     
    }

    const Click = () => {
        setClick(!click)
    }

    const ave = () => {
        let sum = 0;
        let len = i.grades.length;
        i.grades.forEach((it) => {
            sum += parseInt(it);
        })
        var x;
        x = sum / len;
        return x;
    }

    const test = () => {
        return i.grades.map((i, j) => (
            <p key={j}>Test {j + 1}: {i}</p>
        ))
    }

    return (
        <div className='detail'>
            <div className='img'>
                <img src={i.pic} alt={i.name} />
            </div>
            <div className='text'>
                <div className='btn'>
                    <h1>{i.firstName.toUpperCase()} {i.lastName.toUpperCase()}</h1>
                    <button onClick={Click}>{click ? "show more" : "show less"}</button>
                </div>
                <p>Email : {i.email}</p>
                <p>Company : {i.company}</p>
                <p>Skill : {i.skill}</p>
                <p>Average : {ave()}% </p>
                <div className={click ? 'dropdown' : ''}>{test()}
                {i.tags.map(i=><p className='tag-style'>{i}</p>)}
                    <form onSubmit={submit}>

                        <input value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='add a tag' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Card
