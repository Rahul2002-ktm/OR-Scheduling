import React from "react";

export default function MainBody() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://blog.transonic.com/hubfs/images/increase-efficiency-in-the-operating-room.jpg"
              class="d-block w-100"
            />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
              <h1
                className="text-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  color: "white",
                }}
              >
                Efficient scheduling is the heartbeat of a well-run operating
                room.
              </h1>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://sdexpmedical.com/wp-content/uploads/2023/08/IMG_0218A-CAH.jpg"
              class="d-block w-100"
            />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
              <h1
                className="text-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  color: "white",
                }}
              >
                Efficient scheduling is the heartbeat of a well-run operating
                room.
              </h1>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://www.facs.org/media/otdbrnxr/23julbull-or-black-box-pic-1.png?rxy=0.5000937558597412338271141946,0.5&rnd=133409178296170000"
              class="d-block w-100"
            />
            <div className="carousel-caption position-absolute top-50 start-50 translate-middle">
              <h1
                className="text-center"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  padding: "10px",
                  color: "white",
                }}
              >
                Efficient scheduling is the heartbeat of a well-run operating
                room.
              </h1>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
