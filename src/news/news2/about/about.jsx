import React, { useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./about.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="about-container77">
      <h1
        style={{ paddingTop: "50px" }}
        className="title77"
        data-aos="fade-up"
      >
        Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod.
      </h1>
      <p data-aos="fade-up" data-aos-delay="200">
        At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.
      </p>
      <p style={{ paddingTop: "25px" }} data-aos="fade-up" data-aos-delay="400">
        Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. In dictum nullam tincidunt semper pellentesque purus morbi sed. Ut aliquet velit pharetra, nisi nunc, non.
      </p>
      <blockquote style={{ paddingTop: "25px" }} data-aos="fade-up" data-aos-delay="600">
        <span className="quote-mark77">❝</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.
        </p>
      </blockquote>
      <ul style={{ paddingTop: "25px" }} data-aos="fade-up" data-aos-delay="800">
        <li>✅ A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
        <li>✅ Volutpat placerat amet pulvinar lorem nisl.</li>
        <li>✅ Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
        <li>✅ Etiam duis lobortis in fames ultrices commodo nibh.</li>
      </ul>
      <p style={{ paddingTop: "25px" }} data-aos="fade-up" data-aos-delay="1000">
        Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.
      </p>
      <div
        style={{ paddingTop: "25px" }}
        className="social-links77"
        data-aos="fade-up"
        data-aos-delay="1200"
      >
        <span>Share:</span>
        <FaFacebookF />
        <FaLinkedinIn />
        <FaTwitter />
      </div>
    </div>
  );
};

export default About;
