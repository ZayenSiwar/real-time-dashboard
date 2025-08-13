export default function Header() {
  return (
    <header className="bg-gray-800 p-4 border-b border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Real-Time Ops Dashboard</h1>
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <div>Bonjour, Admin</div>
          <img className="w-9 h-9 rounded-full" src="https://i.pravatar.cc/40" alt="avatar" />
        </div>
      </div>
    </header>
  );
}
