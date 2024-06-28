import React from 'react';
import './theme.css';
import { useNavigate } from "react-router-dom";
import Navigation from './navigation';

function Questions() {

    const navigate = useNavigate();

    const handleSignUpLogIn = () => {
        navigate('/question');
    };

    const questions = {
        "1": {
            'Status': 'In Progress',
            'Title': 'Two Sum',
            'Solution': 'Link',
            'Acceptance': '87.5%',
            'Difficulty': 'Medium',
            'Frequency': 'Link',
        },
        "2": {
            'Status': 'In Progress',
            'Title': 'Largest Subsequences',
            'Solution': 'Link',
            'Acceptance': '37.5%',
            'Difficulty': 'Hard',
            'Frequency': 'Link',
        },
        "3": {
            'Status': 'In Progress',
            'Title': 'Kth Largest Elements',
            'Solution': 'Link',
            'Acceptance': '83.5%',
            'Difficulty': 'Easy',
            'Frequency': 'Link',
        },
    };

    const getDiffColor = (d) => {
        switch (d) {
            case "Easy":
                return "Green";
            case 'Medium':
                return 'orange';
            case 'Hard':
                return 'red';
            default:
                return 'black';
        }
    }

    return (
        <>
            <Navigation />
            <div className="container">
                <div className="card" style={{ background: "transparent", border: "1px solid transparent", borderRadius: "10%" }}>
                    <div className="card-body">
                        <table className="table">
                            <thead style={{ background: "transparent", borderBottom: "1px solid #d3d3d3" }}>
                                <tr style={{ background: "transparent" }}>
                                    <th style={{ background: "transparent" }} scope="col">Status</th>
                                    <th style={{ background: "transparent" }} scope="col">Title</th>
                                    <th style={{ background: "transparent" }} scope="col">Solution</th>
                                    <th style={{ background: "transparent" }} scope="col">Acceptance</th>
                                    <th style={{ background: "transparent" }} scope="col">Difficulty</th>
                                    <th style={{ background: "transparent" }} scope="col">Frequency</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(questions).map(([key, question]) => (
                                    <tr key={key}>
                                        <td onClick={handleSignUpLogIn} style={{ cursor: "default" }} >{question.Status}</td>
                                        <td onClick={handleSignUpLogIn} style={{ cursor: "default" }} >{question.Title}</td>
                                        <td style={{ cursor: "default" }} >{question.Solution}</td>
                                        <td onClick={handleSignUpLogIn} style={{ cursor: "default" }} >{question.Acceptance}</td>
                                        <td onClick={handleSignUpLogIn} style={{ color: getDiffColor(question.Difficulty), cursor: "default" }}>
                                            {question.Difficulty}
                                        </td>
                                        <td style={{ cursor: "default" }} >{question.Frequency}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Questions;
