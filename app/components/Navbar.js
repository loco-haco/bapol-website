export default function Navbar() {
    return (
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="/profile" className="text-white">Profile</a>
            <a href="/calendar" className="text-white">Calendar</a>
            <a href="/my-events" className="text-white">My Events</a>
          </div>
          <div className="flex space-x-4">
            <a href="/login" className="text-white">Login</a>
            <a href="/register" className="text-white">Register</a>
          </div>
        </div>
      </nav>
    );
  }
  