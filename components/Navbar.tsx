
import Link from "next/link";

const navItems = [
  { name: "Home", route: "/" },
  { name: "Messages", route: "/messages" },
  { name: "Profile", route: "/profile" },
  { name: "Login", route: "/login" },
  { name: "Signup", route: "/signup" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">

      {/* Logo */}
      <div className="flex-1">
        <Link href="/" className="text-2xl font-bold">
          💬 Chatter
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2">
          {navItems.map((item) => (
            <li key={item.route}>
              <Link href={item.route}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end md:hidden">
        <button
          tabIndex={0}
          className="btn btn-ghost btn-circle text-xl"
        >
          ☰
        </button>

        <ul
          tabIndex={0}
          className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-48 p-2 shadow-lg"
        >
          {navItems.map((item) => (
            <li key={item.route}>
              <Link href={item.route}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
