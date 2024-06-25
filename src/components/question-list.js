import React from 'react';
import './theme.css';

function Question() {
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
                                    <td>{question.Status}</td>
                                    <td>{question.Title}</td>
                                    <td>{question.Solution}</td>
                                    <td>{question.Acceptance}</td>
                                    <td style={{ color: getDiffColor(question.Difficulty) }}>
                                        {question.Difficulty}
                                    </td>
                                    <td>{question.Frequency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Question;
