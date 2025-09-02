import AboutImage from '../assets/mydp.png';
import "./About.css"; // Be aware that styles in this file could override Tailwind classes

function About() {
  return (
    <section id="about" className="py-20 mt-20">
      <h2 className="text-4xl font-bold text-center mb-10 mx-auto uppercase">About Me</h2>

      {/* === The container div has been updated for better layout control === */}
      <div className="container parent-div mx-auto flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20 px-6">
      
        {/* Image */}
        <img 
          src={AboutImage} 
          alt="Profile" 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover flex-shrink-0 mt-5 md:mt-0"
        />

        {/* Text Content */}
        <div className='max-w-lg text-center md:text-left'>
          <p className="text-lg text-gray-700 text-justify mt-0 md:mt-5">
            As an aspiring engineer, I am fueled by a passion for innovation and technology. I'm a front-end developer with a keen eye for detail and a passion for creating beautiful and functional websites. With a background in web development and a strong understanding of UI/UX design, I strive to deliver high-quality, user-centered experiences. I am proficient in HTML, CSS, JavaScript, and various front-end frameworks, and I'm always eager to learn and adapt to new technologies.
          </p>
          <a href="/path/to/resume.pdf" download className="btn-home inline-block px-6 py-2 text-white hover:text-secondary font-semibold hover:bg-teal-400 rounded-md my-2 md:my-5">
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;