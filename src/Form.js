import React from "react";
const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

const Form = (props) => {
    constructor(props) {
        super(props);
        this.state = {
          bussinessName: null,
          fullName:null,
          phoneNumber: null,
          email: null,
          town: null,
          GST: null,
          employees: null,
          programme: null,
          errors: {
            bussinessName: " ",
            fullName:" ",
            phoneNumber: " ",
            email: " ",
            town: " ",
            GST: " ",
            employees: " ",
            programme: " ",
          }
        };
      }
  
    
      handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'fullName': 
            errors.bussinessName = 
              value.length < 5
                ? 'Full Name must be at least 5 characters long!'
                : '';
            break;
          case 'email': 
            errors.fullName = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.phoneNumber = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
            break;
            case 'email': 
            errors.email = 
              value.length < 8
                ? 'email must be at least 8 characters long!'
                : '';
            break;
            case 'town': 
            errors.town = 
              value.length < 8
                ? 'town must be at least 8 characters long!'
                : '';
            break;
            case 'GST': 
            errors.GST = 
              value.length < 8
                ? 'GST must be at least 8 characters long!'
                : '';
            break;
            case 'employees': 
            errors.employees = 
              value.length < 8
                ? 'employees must be at least 8 characters long!'
                : '';
            break;
            case 'programme': 
            errors.programme = 
              value.length < 8
                ? 'programme must be at least 8 characters long!'
                : '';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
          console.info('Valid Form')
        }else{
          console.error('Invalid Form')
        }
      }
    
    

    
  return (
    <div>
      <div className="container-fluid form">
        <form>
          <div className="container form2">
            <div className="row">
              <div className="col-6 offset-3">
                <div className="row my-3">
                  <div className="col-12 my-3">
                    <h2 className="fs-1 fw-bolder">Fill The Form</h2>
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col-12">
                    <label  className="form-label">
                      Legal Name of The Bussiness
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="bussinessName" onChange={this.handleChange} noValidate
                      id="bussinessName"
                    />
                    {errors.bussinessName.length > 0 && 
                <span className='error'>{errors.bussinessName}</span>}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label  className="form-label">
                      Your Full Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="fullName" onChange={this.handleChange} noValidate
                      id="fullName"
                    />
                    {errors.fullName.length > 0 && 
                <span className='error'>{errors.fullName}</span>}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label  className="form-label">
                      Phone Number<span style={{ color: "red" }}>* </span>
                    </label>
                    <input
                      type="text" onChange={this.handleChange} noValidate
                      className="form-control rounded-pill"
                      name="phoneNumber"
                      id="phoneNumber"
                    />
                    {errors.phoneNumber.length > 0 && 
                <span className='error'>{errors.phoneNumber}</span>}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label className="form-label">
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      name="email" onChange={this.handleChange} noValidate
                      id="email"
                    />
                    {errors.email.length > 0 && 
                <span className='error'>{errors.email}</span>}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label  className="form-label">
                      Town/City(Your bussiness need to be in Auckland)
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="town" onChange={this.handleChange} noValidate
                      id="town"
                    />
                    {errors.town.length > 0 && 
                <span className='error'>{errors.town}</span>}
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label>
                      Is your bussiness GST registerd?
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="GST" 
                        id="GST1"
                        value="GST1"
                      />
                      <label className="form-check-label">
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="GST"
                        id="GST2"
                        value="GST2"
                      />
                      <label className="form-check-label" >
                        No
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="GST"
                        id="GST3"
                        value="GST3"
                      />
                      <label className="form-check-label">
                        Not sure
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label>
                      Does your bussiness have any employees?
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="employees"
                        id="no_1"
                      />
                      <label
                        className="form-check-label"
                    
                      >
                        No
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="employees"
                        id="employees1"
                        value="employees1"
                      />
                      <label
                        className="form-check-label"
                        
                      >
                        Yes,1-50
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="employees"
                        id="employees2"
                    
                        value="employees2"
                      />
                      <label
                        className="form-check-label"
                        
                      >
                        Yes,51-100
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="employees"
                        id="employees3"
                        
                        value="employees3"
                      />
                      <label
                        className="form-check-label"
                        
                      >
                        Yes,100+
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label>
                      Have you ever registered with Active Tamaki Makaurau
                      programme?<span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="programme"
                        id="programme1"
                        value="programme1"
                      />
                      <label
                        className="form-check-label"
        
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="programme"
                        id="programme2"
                        value="programme2"
                      />
                      <label
                        className="form-check-label"
                        
                      >
                        No
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="programme"
                        id="programme3"
                        value="programme3"
                      />
                      <label
                        className="form-check-label"
                        
                      >
                        I don't know
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-warning rounded-pill text-white"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Form;
