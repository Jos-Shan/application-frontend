import React, { useState, useEffect} from 'react'
import axios from "axios";
import "./application.css";
import Header from './Header'

const Applications = ({history}) => {
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phone, setContact] = useState("");
    const [birthdate, setBirthday] = useState("");
    const [city, setCity] = useState("");
    const [status, setStatus] = useState("");
    const [children, setChildren] = useState("");
    const [numberofchildren, setNumberOfChildren] = useState("");
    const [education, setEducation] = useState("");
    const [occupation, setOccupation] = useState("");
    const [income, setIncome] = useState("");
    const [laptop, setLaptop] = useState("");
    const [dataAccess, setDataAccess] = useState("");
    const [accessToclasses, setAccess] = useState("");
    const [opportunity, setOpportunity] = useState("");
    const [mediaChannel, setMedia] = useState("");
    const [whyThiscourse, setCourse] = useState("");

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
        email,
        firstname,
        lastname,
        phone,
        birthdate,
        city,
        status,
        children,
        numberofchildren,
        education,
        occupation,
        income,
        laptop,
        dataAccess,
        accessToclasses,
        opportunity,
        mediaChannel,
        whyThiscourse,

    };
    axios
      .post("http://localhost:5000/applications", data)
      .then((res) => {
        console.log(res);
        setTimeout(()=>{
            setSuccess(false)
            history.replace('/thankYou')
        }, 5000)
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(()=>{
            setError(false)
        }, 5000)
        setError(true);
      });

    setEmail('')
    setFirstName("");
    setLastName("");
    setContact("");
    setBirthday("");
    setCity("");
    setStatus("");
    setChildren("");
    setNumberOfChildren("");
    setEducation("");
    setOccupation("");
    setIncome("");
    setLaptop("");
    setDataAccess("");
    setAccess("");
    setOpportunity("");
    setMedia("");
    setCourse("");
  };


    return (
        <div>
            
            <div className="container">
                <form id='application-form' onSubmit={handleSubmit} name="form" method="POST" className="input" autoComplete="off">

                    <Header title="Sign up for Code Queen Kampala" description="We are excited to see you interested. Submit your application here - we can't wait to read it. The name and photo associated with your Google account will be recorded when you upload files and submit this form." />
                    
                    <div className='form-input'>
                        <label id='email-label'>Email:</label>
                        <input type='email' id='email' name="email" placeholder='Enter your email' className='form-input-size' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='form-input'>
                        <label id='fname-label'>Firstname:</label>
                        <input type='text' id='firstName' name="firstname" placeholder='Enter your firstname' className='form-input-size' required value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className='form-input'>
                        <label id='lname-label'>Lastname:</label>
                        <input type='text' id='lastName' name="lastname" placeholder='Enter your lastname' className='form-input-size' required value={lastname} onChange={(e) => setLastName(e.target.value)} />
                    </div>

                    <div className='form-input'>
                        <label id='number-label'>Phone number(WhatsApp number)
                        </label>
                        <input type="text" id="phoneNumber" name="phone" placeholder="Enter your contact" size="10" className='form-input-size' required value={phone} onChange={(e) => setContact(e.target.value)} />
                    </div>

                    <div className='form-input'>
                        <label id='birthday-label'>Date of birth:</label>
                        <input type='date' id='dob' name="birthdate" className='form-input-size' required value={birthdate} onChange={(e) => setBirthday(e.target.value)} />
                    </div>

                    <div className='form-input'>
                        <label id='city-label'>Which city are you from?</label>
                        <input type='text' id='city' name="city" placeholder='Enter your city' className='form-input-size' required value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div className='form-input'>
                        <p>What is your status?</p>
                        <select id='status' name="status" className='form-input-size' required value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option defaultValue>Select current status</option>
                            <option value='married'>Married</option>
                            <option value='single'>Single</option>
                            <option value='divorced'>Divorced</option>
                            <option value='separated'>Separated</option>
                            <option value='single parent'>Single Parent</option>
                        </select>
                    </div>

                    <div className='form-input'>
                        <p>Do you have any children?</p>
                        <input type='radio' name='children' id='radio-btn' value='yes' onChange={(e) => setChildren(e.target.value)} />Yes
                        <input type='radio' name='children' id='radio-btn' value='no' onChange={(e) => setChildren(e.target.value)} />No
                    </div>

                    <div className='form-input'>
                        <label id='children-label'>If yes, how many?</label>
                        <input type='text' id="number_of_children" name="numberofchildren" placeholder='Your answer' className='form-input-size' required value={numberofchildren} onChange={(e) => setNumberOfChildren(e.target.value)}/>
                    </div>

                    <div className='form-input'>
                        <p>What is your highest level of education?</p>
                        <select id='education' name="education" className='form-input-size' required value={education} onChange={(e) => setEducation(e.target.value)}>
                            <option defaultValue>Select education level</option>
                            <option value='university graduate'>University graduate</option>
                            <option value='a-level'>A-Level</option>
                            <option value='o-level'>O-Level</option>
                            <option value='primary'>Primary</option>
                            <option value='Other'>Other</option>
                        </select>
                    </div>

                    <div className='form-input'>
                        <p>What is your current occupation?</p>
                        <select id='occupation' name="occupation" className='form-input-size' required value={occupation} onChange={(e) => setOccupation(e.target.value)}>
                            <option defaultValue>Select occupation</option>
                            <option value='employed'>Employed</option>
                            <option value='unemployed'>Unemployed</option>
                            <option value='Student'>Student</option>
                            <option value='Stay home parent'>Stay home parent</option>
                        </select>
                    </div>

                    <div className='form-input'>
                        <p>What is your monthly income (UGX)?</p>
                        <select id='income' name="income" className='form-input-size' required value={income} onChange={(e) => setIncome(e.target.value)}>
                            <option defaultValue>Select income</option>
                            <option value='None yet'>Don't have an income yet</option>
                            <option value='less than 200k'>Less than 200k</option>
                            <option value='between 200k and 600k'>Between 200k and 600k</option>
                            <option value='more than 600k'>More than 600k</option>
                        </select>
                    </div>

                    <div className='form-input'>
                        <p>Do you have a laptop?</p>
                        <input type='radio' name='laptop' id='radio-btn' value='yes' onChange={(e) => setLaptop(e.target.value)}/>Yes
                        <input type='radio' name='laptop' id='radio-btn' value='no' onChange={(e) => setLaptop(e.target.value)}/>No
                    </div>

                    <div className='form-input'>
                        <p>Do you have access to data bundles or wifi?</p>
                        <input type='radio' name='datAccess' id='radio-btn' value='yes' onChange={(e) => setDataAccess(e.target.value)}/>Yes
                        <input type='radio' name='dataAccess' id='radio-btn' value='no' onChange={(e) => setDataAccess(e.target.value)}/>No
                    </div>

                    <div className='form-input'>
                        <label id='classes-label'>If No, How will you manage to continue with the program Online(for 2 hours classes, 3 times a week for 2 months)? NB: 80% attendance is required for graduation.</label>
                        <input type='text' id="classes" name="accessTolasses" placeholder='Your answer' className='form-input-size' required value={accessToclasses} onChange={(e) => setAccess(e.target.value)}/>
                    </div>

                    <div className='form-input'>
                        <p>How did you hear about this opportunity?</p>
                        <select id='opportunity' name="opportunity" className='form-input-size' required value={opportunity} onChange={(e) => setOpportunity(e.target.value)}>
                            <option defaultValue>Select your answer</option>
                            <option value='facebook'>Facebook</option>
                            <option value='whatsapp'>WhatsApp</option>
                            <option value='website'>Website</option>
                            <option value='linkedin'>LinkedIn</option>
                            <option value='word of mouth'>Word of mouth</option>
                        </select>
                    </div>

                    <div className='form-input'>
                        <label id='media-label'>Which Facebook group, Website, WhatsApp group or other channels?</label>
                        <input type='text' id='media' name="mediaChannel" placeholder='Enter your answer' className='form-input-size' required value={mediaChannel} onChange={(e) => setMedia(e.target.value)}/>
                    </div>

                    <div className='form-input'>
                        <p>Why do you want to sign up for this course?</p>
                        <select id="why_this_course" name="whyThiscourse" className='form-input-size' required value={whyThiscourse} onChange={(e) => setCourse(e.target.value)}>
                            <option defaultValue>Select your answer</option>
                            <option value='career change in technology'>I'm looking for a career change in technology</option>
                            <option value='up-skill for existing employer'>I want to up-skill for my existing employer</option>
                            <option value='improve coding skills for fun'>I want to improve my coding skills for fun</option>
                            <option value='not sure'>I am not sure - I just want to see where this takes me</option>
                        </select>
                    </div>

                    <div className='form-input'>
                        <input type="checkbox" id="permission" name="permission" /><label>Please check this box to give ETC permission to contact you and also process and store your data for reports</label>
                    </div>

                    <div className='form-input'>
                        <input type='submit' value="Submit" id='submit' className="submitBtn" />
                    </div>

                    {success && (
                        <div className="alert alert-success" role="alert">
                            Thank you! Application successfully submitted
                        </div>   
                    )}
                    {error && (
                        <div className="alert alert-danger" role="alert">
                            Error Encountered while submitting application
                        </div>
                    )}

                </form>

            </div>


        </div>
    )
}

export default Applications
