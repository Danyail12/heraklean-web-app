import React from 'react';

const Form = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <h3>Create Client</h3>
        </div>

        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="startingWeight" className="form-label">Starting Weight</label>
              <input type="number" className="form-control" id="startingWeight" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="diet" className="form-label">Attach Diet</label>
              <input type="text" className="form-control" id="diet" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="program" className="form-label">Attach Program</label>
              <input type="text" className="form-control" id="program" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="subscriptionAmount" className="form-label">Subscription Amount</label>
              <input type="text" className="form-control" id="subscriptionAmount" />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="upload" className="form-label">Upload File</label>
              <input type="file" className="form-control" id="upload" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Form;
