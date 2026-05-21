import { useState } from "react";

function Experience() {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [workDates, setWorkDates] = useState('');
    const [responsibilities, setResponsibilities] = useState('');

    const [isEditing, setIsEditing] = useState(true);

    function handleCompanyNameChange(e) {
        setCompanyName(e.target.value);
    }

    function handlePositionTitleChange(e) {
        setPositionTitle(e.target.value);
    }

    function handleWorkDatesChange(e) {
        setWorkDates(e.target.value);
    }

    function handleResponsibilitiesChange(e) {
        setResponsibilities(e.target.value);
    }
     
    return (
    <section className="experience-section">
        <h1>Practical Experience</h1>
            {isEditing ? (
                <div className="form-container">
                    <label>
                        Company name:{' '}   
                        <input 
                            value={companyName}
                            onChange={handleCompanyNameChange}
                        />
                    </label>
                    <label>
                        Position title:{' '}
                        <input 
                            value={positionTitle}
                            onChange={handlePositionTitleChange}
                        />
                    </label>
                    <label>
                        Dates worked:{' '}
                        <input
                            value={workDates}
                            onChange={handleWorkDatesChange}
                            placeholder="e.g., 2022 - Present"
                        />
                    </label>
                    <label>
                        Main responsibilities:{' '}
                        <textarea
                            value={responsibilities}
                            onChange={handleResponsibilitiesChange}
                            rows="4"
                        />
                    </label>
                    <button onClick={() => setIsEditing(false)}>Submit</button>
                </div>
            ) : (
                <div className="preview-container"> 
                    <p><strong>Company Name:</strong> {companyName || "Not provided"}</p>
                    <p><strong>Position Title:</strong> {positionTitle || "Not provided"}</p>
                    <p><strong>Dates Worked:</strong> {workDates || "Not provided"}</p>
                    <p><strong>Responsibilities:</strong></p>
                    <p style={{ whiteSpace: 'pre-wrap' }}>{responsibilities || "Not provided"}</p>

                    <button onClick={() => setIsEditing(true)}>Edit Me</button>
                </div>
        )}
    </section>
    );
}

export default Experience;