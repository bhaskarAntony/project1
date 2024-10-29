import React from 'react'
import './App.css'

function App() {
  return (
    <section className="container-fluid app">
      <div className="row">
        <div className="col-md-3">
            <div className="sidebar">
              <img src="https://europe2023.advertisingweek.com/images/userfiles/images/partners/uploads/414-pubmatic.png" alt="" className='logo'/>
              <ul className="nav">
                <li><a href="">information We Collect</a></li>
                <li><a href="">Your Data Subject Rights</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Cookie Policy <i class="bi bi-box-arrow-in-up-right"></i></a></li>
                <li><a href="">information We Collect <i class="bi bi-box-arrow-in-up-right"></i></a></li>
              </ul>
            </div>
        </div>
        <div className="col-md-9">
          <div className="app-main p-3 p-md-5">
            <h1 className="fs-2">Exercise your data rights</h1>
            <p className="fs-6">In order to complete your request, please help us indentify you in our system</p>

            <form>
              <div className="row">
                <div className="col-md-12">
                <div className="form-group">
                <label htmlFor="" className="form-label">Type of Request <span>*</span></label>
                <select name="request" id="request" className="form-control">
                  <option value="right to erasure">Right to erasure</option>
                  <option value=""></option>
                </select>
              </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mt-3">
                    <label htmlFor="" className='form-label'>First Name</label>
                    <input type="text" placeholder='enter first name' className="form-control" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group mt-3">
                    <label htmlFor="" className='form-label'>Last Name</label>
                    <input type="text" placeholder='enter last name' className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                 <div className="form-group mt-3">
                 <label htmlFor="" className='form-label'>Email Addres <span>*</span></label>
                 <input type="text" placeholder='email address' className='form-control'/>
                 </div>
                </div>

                <div className="col-md-12">
                 <div className="form-group mt-3">
                 <label htmlFor="" className='form-label'>Comments <span>*</span></label>
                 <input type="text" placeholder='comments' className='form-control'/>
                 </div>
                </div>
                <div className="btns d-flex gap-3 mt-4 justify-content-end">
                  <button className="btn btn-outline-dark rounded-0">Clear All</button>
                  <button className="btn btn-outline-dark rounded-0">Submit</button>
                </div>

              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default App