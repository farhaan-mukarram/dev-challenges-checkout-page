const Footer = () => {
  return (
    <footer className="mt-24 mb-6 text-sm font-montserrat">
      <p className="font-medium text-center text-[#BDBDBD]">
        created by{" "}
        <span className="font-bold">
          <a
            href="https://github.com/farhaan-mukarram/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            farhaan-mukarram
          </a>
        </span>
        {" - "}
        <a
          href="https://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          devChallenges.io
        </a>
      </p>
    </footer>
  );
};

export default Footer;
