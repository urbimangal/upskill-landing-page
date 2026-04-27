const programs = [
  {
    tag: "Data & AI",
    title: "Data Science & Machine Learning",
    duration: "6 Months",
    level: "Intermediate",
    partner: "IIT Guwahati",
  },
  {
    tag: "Management",
    title: "Product Management Certification",
    duration: "5 Months",
    level: "Beginner–Intermediate",
    partner: "IIM Nagpur",
  },
  {
    tag: "Technology",
    title: "Full Stack Development",
    duration: "7 Months",
    level: "Beginner",
    partner: "IIIT Hyderabad",
  },
  {
    tag: "Business",
    title: "Business Analytics",
    duration: "4 Months",
    level: "Beginner",
    partner: "IIM Lucknow",
  },
  {
    tag: "AI",
    title: "Generative AI for Professionals",
    duration: "3 Months",
    level: "Intermediate",
    partner: "Accredian",
  },
  {
    tag: "Leadership",
    title: "Executive Leadership Program",
    duration: "8 Months",
    level: "Advanced",
    partner: "IIM Bangalore",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Programs
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Choose from a wide range of programs designed for professionals and
          enterprise teams.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div
            key={program.title}
            className="bg-white p-6 rounded-xl border hover:shadow-xl hover:-translate-y-1 transition flex flex-col justify-between"
          >
            <div>
              <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                {program.tag}
              </span>

              <h3 className="mt-4 font-semibold text-lg text-gray-800">
                {program.title}
              </h3>

              <div className="text-sm text-gray-400 mt-3 flex gap-4">
                <span>{program.duration}</span>
                <span>{program.level}</span>
              </div>

              <p className="text-sm text-gray-500 mt-2">
                Partner: <span className="font-medium">{program.partner}</span>
              </p>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
