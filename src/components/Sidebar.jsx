export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6 hidden md:block">
      <h2 className="text-lg font-bold mb-6">Menu</h2>
      <nav className="space-y-3 text-gray-300">
        <div className="py-2 px-3 rounded hover:bg-gray-800 cursor-pointer">🏠 Dashboard</div>
        <div className="py-2 px-3 rounded hover:bg-gray-800 cursor-pointer">📈 Metrics</div>
        <div className="py-2 px-3 rounded hover:bg-gray-800 cursor-pointer">⚙️ Settings</div>
      </nav>
    </aside>
  );
}
