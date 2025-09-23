import React from 'react'

export default function Ex92UncontrolledForm() {

    // Form with name and email fields
    // Uncontrolled form, without state variables

    function formSubmitHandling(e: React.FormEvent) {
        e.preventDefault()
        // get access to form element data as FormData
        // print the form values to console, to showcase that we can actually read them 
        const formData = new FormData(e.target);
        console.log('Name:', formData.get('name'))
        console.log('Email:', formData.get('email'))
    }

  return (
    <div>
        <h1>Uncontrolled Form</h1>
        <form onSubmit={ formSubmitHandling }>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" />
            </div>
            <button type="submit">Submit</button>
        </form>

    </div>
  )
}
