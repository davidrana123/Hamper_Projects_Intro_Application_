import React, { useState } from "react";
import { addRecords } from "./api/index";

const Contact = () => {
  const [movie, setMovie] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setMovie((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const addMovie = async () => {
    alert("your response have been recorded, Thanks");
    await addRecords(movie);
  };

  return (
    <>
      <div className="header">
        <div className="my-5">
          <h1 className="text-center">Contact Me!</h1>
        </div>
        <div className="container contact_div" id="contact">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={movie.fullname}
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={movie.phone}
                    placeholder="mobile number"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={movie.email}
                    placeholder=""
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Message
                  </label>
                  <textarea
                    onChange={handleChange}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="msg"
                    value={movie.msg}
                  ></textarea>
                </div>

                <div class="col-12">
                  <button
                    onClick={addMovie}
                    class="btn btn-outline-primary"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
