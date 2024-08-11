import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitFormSuccess: false,
  }

  onChangefirstname = event => {
    this.setState({firstname: event.target.value, firstNameError: false})
  }

  onChangelastname = event => {
    this.setState({lastname: event.target.value, lastNameError: false})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({isSubmitFormSuccess: true})
    } else {
      this.setState({
        firstNameError: firstname === '',
        lastNameError: lastname === '',
      })
    }
  }

  submitAnotherResponse = () => {
    this.setState({
      firstname: '',
      lastname: '',
      firstNameError: false,
      lastNameError: false,
      isSubmitFormSuccess: false,
    })
  }

  renderLastnameField = () => {
    const {lastname, lastNameError} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className="lastname-input-field"
          value={lastname}
          onBlur={this.handleBlurLastName}
          onChange={this.onChangelastname}
          placeholder="Last name"
        />
        {lastNameError && <p className="error-message">Required</p>}
      </>
    )
  }

  handleBlurFirstName = () => {
    const {firstname} = this.state
    if (firstname === '') {
      this.setState({firstNameError: true})
    }
  }

  handleBlurLastName = () => {
    const {lastname} = this.state
    if (lastname === '') {
      this.setState({lastNameError: true})
    }
  }

  renderFirstnameField = () => {
    const {firstname, firstNameError} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className="firstname-input-field"
          value={firstname}
          onBlur={this.handleBlurFirstName}
          onChange={this.onChangefirstname}
          placeholder="First name"
        />
        {firstNameError && <p className="error-message">Required</p>}
      </>
    )
  }

  render() {
    const {isSubmitFormSuccess} = this.state

    return (
      <div className="registration-container-main-page">
        <h1 className="registration-heading">Registration</h1>
        {isSubmitFormSuccess ? (
          <div className="successfullSubmissionView">
            <img
              className="successSubmitIcon"
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p className="success-heading">Submitted Successfully</p>
            <button
              onClick={this.submitAnotherResponse}
              className="login-button"
              type="button"
            >
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="registration-form" onSubmit={this.submitForm}>
            <div className="input-container">{this.renderFirstnameField()}</div>
            <div className="input-container">{this.renderLastnameField()}</div>
            <button type="submit" className="login-button">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
