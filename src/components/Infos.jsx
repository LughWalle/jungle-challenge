import React, { useContext, useEffect } from "react";
import "./sass/Info.scss";
import ImageSection1 from "../assets/images/ImageSection1.png";
import ImageSection3 from "../assets/images/ImageSection3.png";
import ImageSection4 from "../assets/images/ImageSection4.png";
import ImageSection5 from "../assets/images/ImageSection5.png";
import JungleContext from "../context/JungleContext";

function Infos() {
  const {
    handleSubmit,
    setEmail,
    invalid,
    setName,
    setSpan,
    email,
    name,
    span,
  } = useContext(JungleContext);

    useEffect(() => {
      if (invalid) setSpan('');
    }, [invalid, setSpan])

  return (
    <div>
      <section className="section1">
        <div className="sec-text">
          <h1>
            Share your home,
            <br /> nanny and costs
          </h1>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu. <a href="/">Hapu means tribe</a> and it’s our foundational 3
            tribal principles that empowers you to create and manage your own
            tribe. A tribe that together has the power to create new affordable
            solutions in childcare that work for you and your community.
          </p>
          <a href="/">Ready to get started?</a>
        </div>
        <img src={ImageSection1} alt="app example" />
      </section>

      <hr className="divider" />

      <section className="section2">
        <div className="sec-text">
          <h1>Are you a parent without a nanny and looking to share?</h1>
          <p>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </p>
        <span>{span}</span>
        </div>
        <form className={span ? 'danger': ''} >
          <input
            type="text"
            name="your name"
            id="your-name"
            placeholder="Your name"
            onChange={({ target }) => setName(target.value)}
            required
          />
          <input
            type="email"
            name="your email"
            id="your-email"
            placeholder="your email"
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <button
            type="submit"
            className="submit"
            onClick={(e) => {
              e.preventDefault();
              
              handleSubmit(name, email);
            }}
          >
            send
          </button>
        </form>
      </section>

      <hr className="divider" />

      <section className="section3">
        <img src={ImageSection3} alt="payments simple" />
        <div className="sec-text">
          <h1>Shared payments made simple</h1>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <a href="/">Read how Bridget’s share (without Hapu) ended over $15</a>
        </div>
      </section>

      <hr className="divider" />

      <section className="section4">
        <div className="sec-text">
          <h1>A framework built for the long term</h1>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <a href="/">Read how Hapu’s tribal background defines our app</a>
        </div>
        <img src={ImageSection4} alt="billing history" />
      </section>

      <hr className="divider" />

      <section className="section5">
        <img src={ImageSection5} alt="diary icon" />
        <div className="sec-text">
          <h1>Coming soon: Nanny Share Daily Diary!</h1>
          <p>
            With the Hapu daily diary your nanny will be able to update you and
            your sharers with photos and commentary of the day. You and sharers
            will receive notifications and you’ll be able to login to view the
            daily adventures fo your little ones. We can’t wait!
          </p>
        </div>
      </section>
    </div>
  );
}

export default Infos;
