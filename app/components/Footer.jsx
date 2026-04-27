export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-center">
      <h2 className="text-white text-lg font-bold mb-2">Accredian</h2>
      <p className="text-sm">Upskill your workforce with the best programs.</p>

      <p className="text-xs mt-6">
        © {new Date().getFullYear()} Accredian. All rights reserved.
      </p>
    </footer>
  );
}
