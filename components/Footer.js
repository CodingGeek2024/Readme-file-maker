const Footer = () => {
  return (
    <footer className="w-full mt-8 text-center">
      <p className=" flex items-center justify-center mb-4">
        Checkout The{" "}
        <a
          href="https://github.com/CodingGeek2024/Readme-file-maker"
          target="_blank"
          className=" font-bold flex ml-2 underline"
        >
          <img
            src="https://img.icons8.com/fluency/48/000000/github.png"
            className=" w-[25px]"
          />
          Repository
        </a>
      </p>
      <p className=" flex items-center justify-center">
        Follow On{" "}
        <a
          href="https://twitter.com/"
          target="_blank"
          className=" font-bold flex ml-2 underline"
        >
          <img
            src="https://img.icons8.com/fluency/48/000000/twitter.png"
            className=" w-[25px]"
          />
          @shubham_kumar
        </a>
      </p>
    </footer>
  );
};

export default Footer;
