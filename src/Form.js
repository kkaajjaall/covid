import React from "react";

const Form = () => {
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
                    <label for="bussinessName" className="form-label">
                      Legal Name of The Bussiness
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="bussinessName"
                      id="bussinessName"
                    />
                    <small
                      id="bussinessvalid"
                      className="form-text text-muted invalid-feedback"
                    >
                      Your Legal Name of The Bussiness must be 2-20 characters
                      long and should not start with a number
                    </small>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label for="fullName" className="form-label">
                      Your Full Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="fullName"
                      id="fullName"
                    />
                    <small
                      id="fullNamevalid"
                      className="form-text text-muted invalid-feedback"
                    >
                      Your Your Full Name must be 2-10 characters long and
                      should not start with a number
                    </small>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label for="phoneNumber" className="form-label">
                      Phone Number<span style={{ color: "red" }}>* </span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="phoneNumber"
                      id="phoneNumber"
                    />
                    <small
                      id="phoneNumbervalid"
                      className="form-text text-muted invalid-feedback"
                    >
                      Your Phone Number must be 2-10 characters long
                    </small>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label for="email" className="form-label">
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      name="email"
                      id="email"
                    />
                    <small
                      id="emailvalid"
                      className="form-text text-muted invalid-feedback"
                    >
                      Your Email must be 2-10 characters long and should not
                      start with a number
                    </small>
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col-12">
                    <label for="town" className="form-label">
                      Town/City(Your bussiness need to be in Auckland)
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control rounded-pill"
                      name="town"
                      id="town"
                    />
                    <small
                      id="townvalid"
                      className="form-text text-muted invalid-feedback"
                    >
                      Your Town/City must be 2-20 characters long and should not
                      start with a number
                    </small>
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
                      <label className="form-check-label" for="yes">
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
                      <label className="form-check-label" for="no">
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
                      <label className="form-check-label" for="notsure">
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
                        for="flexRadioDefault1"
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
                        for="flexRadioDefault2"
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
                        checked
                        value="employees2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
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
                        checked
                        value="employees3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault4"
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
                        for="flexRadioDefault1"
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
                        for="flexRadioDefault1"
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
                        for="flexRadioDefault2"
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
