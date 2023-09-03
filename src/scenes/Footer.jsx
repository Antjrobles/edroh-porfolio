import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center items-center">
          <p className="font-playfair font-semibold text-1xl text-yellow">
            ANTONIO ROBLES
          </p>
          <SocialMediaIcons />
          <p className="font-playfair text-md text-yellow">
            ©2022 AR. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
