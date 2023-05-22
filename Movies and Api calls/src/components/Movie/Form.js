import React, { useState } from "react"
import classes from './Form.module.css'
const Form = (props) =>{
    const[title, setTitle] = useState('')
    const[opening,setOpening] = useState('')
    const[release,setRelease] = useState('')

    const titleHandler = (event) =>{
       setTitle(event.target.value)
    }
    const openingHandler = (event) =>{
        setOpening(event.target.value)
     }
     const releaseHandler = (event) =>{
        setRelease(event.target.value)
     }

     const submitHandler =(event)=>{
             event.preventDefault()

             const obj = {
                title: title,
                OpeningText:opening,
                ReleaseDate:release
             }

             props.comingData(obj)

             setRelease('')
             setOpening('')
             setTitle('')
     }
    
    return (
        <section>
            <form  onSubmit={submitHandler}  >
                <label >Title</label>
                <input type="text"  onChange={titleHandler}/>
                <label className={classes.forminline }>Opening Text: </label>
                <textarea id="w3review" name="w3review" rows="4" cols="50"  onChange={openingHandler}></textarea>
                <br/>
                <label >Release Date</label>
                <input type="text"  onChange={releaseHandler}/>
                <br/>
                <button className={classes.margin}>Add Movie</button>
            </form>
        </section>
    )

}

export default Form