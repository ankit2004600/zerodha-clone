import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className=" p-5  " id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5 m-3">
        <div className=" col-6 ">
        <h1 className="fs-3">
          Search for an answer or browse help topics to create a ticket
        </h1>
        <input placeholder="Eg.how do i activate F&Q" />
        <br />
        <a href="">Track account opening</a><br/>
        <a href="">Track segment activation</a><br/>
        <a href="">Intraday margins</a><br/>
        <a href="">Kite user manual</a><br/>
      </div>
      <div className="col-md-6 ps-5 ">
        <h1>Featured</h1>
        <ol>
          <li>
            {" "}
            <a href="">Latest Intraday leverages and Square-off timings</a>
          </li>
          <li>
            <a href="">Rights Entitlements listing in April 2026</a>
          </li>
        </ol>
      </div>
      </div>
    </section>
  );
}

export default Hero;
