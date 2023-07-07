import Navbar from "../Navbar"
import { useState } from "react"
import "./index.css"
const ContactForm =()=>{
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [feedback,setFeedback]=useState("")
    const submitFeedback=event=>{
        event.preventDefault()
        setUsername("")
        setEmail("")
        setFeedback("")
        alert("Feedback Send Successfully")
    }
    const onUsernameChange=event=>{
        setUsername(event.target.value)
    }
    const onEmailChange=event=>{
        setEmail(event.target.value)
    }
    const onFeedbackChange=event=>{
        setFeedback(event.target.value)
    }
    return(
        <div className="contact-page">
        <Navbar/>

        <div className="feedback-form-container">
            <form className="feedback-form" onSubmit={submitFeedback}>
                <h1 className="feedback-heading">Feedback</h1>
                <label className="label-element" htmlFor="username">USERNAME</label>
                <br/>
                <input className="input-element"
                        value={username}
                        name="username"
                        required
                        placeholder="Enter Username"
                        onChange={onUsernameChange}/>
                <br/>

                <label className="label-element" htmlFor="email">Email</label>
                <br/>
                <input name="email"
                       className="input-element"
                       type="email"
                       required
                       value={email}
                       placeholder="Enter Email"
                       onChange={onEmailChange}/>
                <br/>

                <label className="label-element" htmlFor="feedback">Feedback</label>
                <br/>
                <textarea  className="textarea-element"
                            name="feedback"
                            required
                            value={feedback}
                            placeholder="Enter Feedback"
                            onChange={onFeedbackChange}>
                            </textarea>
                <br/>
                <button className="submit-button" type="submit">Submit Feedback</button>
            </form>

        </div>
        </div>
    )
}
export default ContactForm