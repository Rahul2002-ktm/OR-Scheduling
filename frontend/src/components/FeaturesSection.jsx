import "../App.css";
export default function FeaturesSection() {
  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="text-animation ">
            <h3
              className="text-center"
              style={{ fontSize: "4rem", color: "#007bff" }}
            >
              Important Features
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex mb-4">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img
              src="../../public/Images/Easy_Schedulling.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Easy Scheduling</h5>
              <p className="card-text">
                Schedule operation rooms and resources with ease using our
                intuitive interface.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex mb-4">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img
              src="../../public/Images/Real_time_updates.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Real-time Updates</h5>
              <p className="card-text">
                Receive real-time updates and notifications about schedule
                changes and updates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex mb-4">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img
              src="../../public/Images/Efficient.png"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Efficient Management</h5>
              <p className="card-text">
                Efficiently manage operation room resources for optimal
                utilization.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex mb-4">
          <div className="card flex-fill" style={{ width: "18rem" }}>
            <img
              src="../../public/Images/Reporting.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Reporting & Analytics</h5>
              <p className="card-text">
                Generate customizable reports and analytics for better
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
