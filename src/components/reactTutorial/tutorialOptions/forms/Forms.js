import { useState } from 'react'
import './Forms.css'

import AddingFormsInReact from './assets/AddingFormsInReact.png'
import HandlingForms from './assets/HandlingForms.png'
import SubmittingForms from './assets/SubmittingForms.png'
import MultipleInputFields from './assets/MultipleInputFields.png'
import TextArea from './assets/TextArea.png'
import Select from './assets/Select.png'

const Forms = () => {

    const [city, setCity] = useState("");

    const Submit = (event) => {
        event.preventDefault();
        alert(`You searched for the city of ${city}`)
    }

    const [input, setInput] = useState({});

    const formChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const eventSubmit = (event) => {
        event.preventDefault();
        console.log(input)
    }

    const [mytext, setMytext] = useState(
        "The content of a textarea goes in the value attribute"
    );

    const onChange = (event) => {
        setMytext(event.target.value)
    }


    const [myPet, setMyPet] = useState(' ')

    const handleChange = (event) => {
        setMyPet(event.target.value)
    }



    return (
        <div className='form__container'>
            <div className='form__content'>
                <div className='form__section'>
                    <h1>Forms</h1>
                    <p>As with the forms in HTML, forms in React let users interact with the page while managing data.</p>

                </div>

                <div className='form__section'>
                    <h2>Adding forms in React</h2>
                    <p>As with the forms in HTML, forms in React let users interact with the page while managing data.</p>
                    <p>While this will work as intended, this will cause the entire page to refresh. Which is not what we want as React developers.</p>
                    <img src={AddingFormsInReact} alt="" />
                    <form>
                        <label> Insert Text Here:
                            <input
                                type='text'
                            />
                        </label>
                    </form>
                </div>

                <div className='form__section'>
                    <h2>Handling Forms</h2>
                    <p> In React, form data is typically managed through components. When data is handled through components,
                        the data can then be managed through the components state. Changes can then be controlled by adding
                        event handlers in the “onChange” attribute. The “useState” hook is the medium for managing the inputs
                        and provides “a single source of truth” to the application.
                    </p>
                    <img src={HandlingForms} alt="" />
                    <form>
                        <label> Insert Text Here:
                            <input
                                type='text'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </label>
                    </form>
                </div>

                <div className='form__section'>
                    <h2>Submitting Forms</h2>
                    <p>By adding an event handler, the submit action can be controlled through the "onSubmit" attribute.</p>
                    <img src={SubmittingForms} alt="" />
                    <form onSubmit={Submit} >
                        <label> Insert Text Here:
                            <input
                                type='text'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </label>
                        <input type='submit' />
                    </form>
                </div>

                <div className='form__section'>
                    <h2>Multiple Input Fields</h2>
                    <p>"You can control the values of more than one input field by adding a name attribute to each element."</p>
                    <p>Our state starts as an empty object.</p>
                    <p>"To access the fields in the event handler use the event.target.name and event.target.value syntax."</p>
                    <p>"To update the state, use square brackets [bracket notation] around the property name."</p>
                    <p>Check Response for this in the console. aka f12</p>
                    <img src={MultipleInputFields} alt="" />
                    <form onSubmit={eventSubmit} >
                        <label> Insert City Name Here:
                            <input
                                type='text'
                                name='city'
                                value={input.city || ""}
                                onChange={formChange}
                            />
                        </label>
                        <label> Enter City Ranking Here:
                            <input
                                type="number"
                                name='ranking'
                                value={input.ranking || ""}
                                onChange={formChange}
                            />
                        </label>
                        <input type='submit' />
                    </form>
                </div>

                <div className='form__section'>
                    <h2>Text Area</h2>
                    <p>With React, a "textarea"'s value is placed in the value attribute. useState is how the value of the textarea will be managed. </p>
                    <form>
                        <textarea value={mytext} onChange={onChange} />
                    </form>
                    <img src={TextArea} alt="" />
                </div>

                <div className='form__section'>
                    <h2>Select</h2>
                    <p>"In React, the selected value is defined with a value attribute on the select tag:"</p>
                    <form>
                        <select value={myPet} onChange={handleChange} >
                            <option value="Cat">Cat</option>
                            <option value="Dog">Dog</option>
                            <option value="Bird">Bird</option>
                        </select>
                    </form>
                    <p>I am a  {myPet}</p>
                    <img src={Select} alt="" />

                </div>
            </div>
        </div>

    )
}

export default Forms

