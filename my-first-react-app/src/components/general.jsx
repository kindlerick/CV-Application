import { useState } from "react";

function General() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [isEditing, setIsEditing] = useState(true);

    function handleFullNameChange(e) {
        setFullName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneChange(e) {
        setPhone(e.target.value);
    }
     
    return (
    <section className="general-section">
        <h1>General Information</h1>
            {isEditing ? (
                <div className="form-container">
                    <label>
                        Full name:{' '}   
                        <input 
                            value={fullName}
                            onChange={handleFullNameChange}
                        />
                    </label>
                    <label>
                        Email:{' '}
                        <input 
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <label>
                        Phone number:{' '}
                        <input
                            type="tel"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </label>
                    <button onClick={() => setIsEditing(false)}>Submit</button>
                </div>
            ) : (
                <div className="preview-container"> 
                    <p><strong>Full Name:</strong> {fullName || "Not provided"}</p>
                    <p><strong>Email:</strong> {email || "Not provided"}</p>
                    <p><strong>Phone:</strong> {phone || "Not provided"}</p>

                    <button onClick={() => setIsEditing(true)}>Edit Me</button>
                </div>
        )}
    </section>
    );
}

export default General;