import React, { Component } from "react";
import{FaCheckCircle} from "react-icons/fa"

const Banner = () => {
  return (
    <div className="banner container my-5">
      <h1 className="heading text-center fw-bolder  my-5">
        COVID-19 Support Funding
      </h1>
      <div className="row d-flex">
        <div className="col-lg-5 col-md-10 offset-lg-1 text my-3 ">
          <p>
            The government has announced funding to help business owners get
            back on track after COVID-19's effects. You may be eligible to
            receive $3,000 worth of funding and help for your business.
          </p>
          <p>
            This can help your business's operations, marketing & advertising.
          </p>
          <p>
            There is a limited amount of funding for a limited time only. This
            is separate to the resurgence payment and wage subsidy. You do not
            need to show a decline in revenue. Active Tāmaki Makaurau
            eligibility & other criteria appplies.
          </p>
          <div className="text2 my-5">
              <ul>
                  <li> <FaCheckCircle color="green"/> Learn more about support services and getting funding for them for
              your business</li>
              <li>  <FaCheckCircle color="green"/> Limited time only, when it's gone, it's gone</li>
              <li>  <FaCheckCircle color="green"/>Take advantage of government support for COVID-19</li>
              </ul>
           
          </div>
        </div>
        <div className="col-lg-5 col-md-10  img">
          <img src="img\image.jpg" alt="covid pic width=100px" height="100px" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
