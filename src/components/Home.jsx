import "./Home.css";

function Home() {
  return (
    <section
      id="home"
      className="flex items-center justify-center text-center my-10 py-10 lg:py-20"
    >
      <div>
        <h2 className=" text-2xl ">
          Hi there! I'm{" "}
          <span className="text-teal-500 typing-effect font-semibold">Muaz Muhammad</span>
        </h2>
        <br />
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-800 animate-slidein ">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl mt-4 font-bold text-cyan-800 animate-slidein">
          I'm an aspiring engineer and front-end developer. I create beautiful,
          user-friendly websites.
        </p>
        <a
          href="#contact"
          className="mt-6 btn-home  inline-block px-8 py-3 text-white hover:text-secondary font-bold hover:bg-teal-400 rounded-md"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Home;
