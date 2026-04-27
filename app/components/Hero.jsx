export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-28 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Upskill Your Team with{" "}
            <span className="text-blue-600">World-Class</span> Programs
          </h1>

          <p className="text-gray-600 text-lg max-w-xl">
            Learn from top universities and boost your team's performance with
            industry-ready programs.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Explore Programs
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-sm space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              Learning Dashboard
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-600">10k+</p>
                <p className="text-xs text-gray-500">Learners</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-xl font-bold text-green-600">92%</p>
                <p className="text-xs text-gray-500">Completion</p>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Data Science</span>
                  <span>80%</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>AI & ML</span>
                  <span>90%</span>
                </div>
                <div className="bg-gray-200 h-2 rounded-full">
                  <div className="bg-blue-500 h-2 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
