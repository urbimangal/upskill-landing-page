const features = [
  { icon: "🎓", title: "University Programs", desc: "Designed with top universities." },
  { icon: "📊", title: "Progress Tracking", desc: "Track learning progress easily." },
  { icon: "🧑‍🏫", title: "Expert Mentors", desc: "Learn from industry experts." },
  { icon: "📱", title: "Flexible Learning", desc: "Access anytime, anywhere." },
  { icon: "🏆", title: "Certificates", desc: "Industry-recognized credentials." },
  { icon: "🤝", title: "Support", desc: "Dedicated enterprise support." },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Everything your team needs to grow and succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}