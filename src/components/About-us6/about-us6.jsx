import React from 'react'
import Link from 'next/link'

const AboutUs6 = () => {
    return (
      <section id="about" className="about-ar section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 valign">
              <div className="img">
                <div
                  className="bg-img bg-fixed hero-bg"
                  style={{ backgroundImage: "url(https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
                ></div>
                <div className="exp valign text-center">
                  <div className="full-width">
                    <h2
                      className="bg-img bg-fixed"
                      style={{ backgroundImage: "url(https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
                    >
                      25
                    </h2>
                    <p>Years Of Experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 valign">
              <div className="content">
                <h6 className="sub-title main-color  text-u">About Us</h6>
                <h3>Best Raw Materials & Design  for You.</h3>
                <p>
                  Fashion bibendum pharetra eleifend. Suspendisse vel
                  volutpat purus, sit amet bibendum nisl. Cras mollis turpis a
                  ipsum ultes, nec condimentum ipsum consequat. Mauris vitae
                  consequat nibh, vitae interdum sit amet bibendum nisl.
                </p>

                <Link
                  href={``}
                >
                  <a className="butn bord mt-30">
                    <span>About Us</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutUs6