import React from "react";
import Link from "next/link";

const Services6 = () => {
  return (
    <section className="serv-arch">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Materials</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Design</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
          >
            <h6 className="numb">03</h6>
            <h5>Complaince</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
          >
            <h6 className="numb">04</h6>
            <h5>Furnituristic Tech</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600)" }}
          >
            <h6 className="numb">05</h6>
            <h5>Commitments</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services6;
