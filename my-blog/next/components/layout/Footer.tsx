export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-4xl mx-auto px-5 py-4 text-sm text-gray-500">
        {new Date().getFullYear()} My App
      </div>
    </footer>
  );
}
