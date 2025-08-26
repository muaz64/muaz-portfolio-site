import { motion } from "framer-motion";
import { Code, Palette, Layout, Terminal, Wrench } from "lucide-react";

const skills = [
  {
    category: "Front-End Development",
    icon: <Code className="w-12 h-12 text-secondary mx-auto" />,
    items: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "jQuery",
      "React.js",
      "Next.js",
      "WordPress",
    ],
  },
  {
    category: "Design Tools",
    icon: <Palette className="w-12 h-12 text-pink-500 mx-auto" />,
    items: ["Figma", "Adobe XD (basic)", "Canva"],
  },
  {
    category: "UI/UX",
    icon: <Layout className="w-12 h-12 text-green-600 mx-auto" />,
    items: [
      "Wireframing",
      "Prototyping",
      "Responsive Design",
      "User Flows",
      "Accessibility",
      "Design Systems",
    ],
  },
  {
    category: "Developer Tools",
    icon: <Terminal className="w-12 h-12 text-blue-500 mx-auto" />,
    items: ["Git", "GitHub", "Android Studio", "VS Code", "Plugins", "PyCharm"],
  },
  {
    category: "Other Tools",
    icon: <Wrench className="w-12 h-12 text-orange-500 mx-auto" />,
    items: [
      "Microsoft Office (Word, Excel, PowerPoint)",
      "Google Sheet",
      "Google Doc",
      "Google Slide",
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-secondary text-center mb-20">
        Technical Skills
      </h2>
      <div className="container parent-div mx-5 md:mx-10 lg:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-10 py-10">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-10 bg-gray-200 border rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-5">{skillSet.icon}</div>
              <h3 className="text-gray-900 font-semibold text-xl mb-6">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skillSet.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-white text-gray-800 rounded-full shadow-sm border hover:bg-secondary hover:text-white transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
