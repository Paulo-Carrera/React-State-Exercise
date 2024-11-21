import React , { useState } from 'react';
import './MagicEightBall.css';

const MagicEightBall = ({answers}) => {

    const [color, setColor] = useState('black');
    const [text, setText] = useState('Think of a Question');

    const getAnswer = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        setColor(answer.color);
        setText(answer.msg);
    }    

    const shake = () => {
        const ball = document.querySelector('.eight-ball');
        ball.classList.add('shake');
        setTimeout(() => {
            ball.classList.remove('shake');
        }, 1000);
        setColor('black');
        setText('Think of a Question');
    }

    return (
        <>
            <h1>Magic 8-Ball</h1>
            <p>Click the ball to get an answer</p>
            <div className="eight-ball">
                <h1 onClick={getAnswer} className="eight-ball-answer" style={{color:color}}>{text}</h1>
            </div>
            <button onClick={shake}>Shake</button>
        </>
    )
}

export default MagicEightBall;