import { useState } from "react";

function Education() {

    const [schoolName, setSchoolName] = useState('');
    const [studyDate, setStudyDate] = useState('');
    const [studyTitle, setStudyTitle] = useState('');


    const [isEditing, setIsEditing] = useState(true);

    function handleSchoolNameChange(e) {
        setSchoolName(e.target.value);
    }

    function handleStudyDateChange(e) {
        setStudyDate(e.target.value);
    }

    function handleStudyTitleChange(e) {
        setStudyTitle(e.target.value);
    }
     
    return (
    <section className = "education-section">
        <h1>Education Information</h1>
            {isEditing ? (
                <div className="form-container">
                    <label>
                        School name:{' '}   
                        <input value={schoolName}
                        onChange={handleSchoolNameChange}
                        />
                    </label>
                    <label>
                        Study title:{' '}
                        <input value={studyTitle}
                        onChange={handleStudyTitleChange}
                        />
                    </label>
                    <label>
                        Date of study:{' '}
                        <input
                        value={studyDate}
                        onChange={handleStudyDateChange}
                        />
                    </label>
                    <button onClick={() => setIsEditing(false)}>Submit</button>
                </div>
            ) : (
                <div className="preview-container"> 
                    <p><strong>Name:</strong> {schoolName || "Not provided"}</p>
                    <p><strong>Study Title:</strong> {studyTitle || "Not provided"}</p>
                    <p><strong>Study Date:</strong> {studyDate || "Not provided"}</p>

                    <button onClick={() => setIsEditing(true)}>Edit Me</button>
                </div>
        )}
    </section>
    );
}

export default Education