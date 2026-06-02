import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import zazuLogo from "../../assets/zazulogo.png";

function Navbar() {
  const navLinks = [
    { name: "Destinations", to: "/destinations", type: "link" },
    {
      name: "Explore",
      type: "dropdown",
      items: [
        { name: "All", to: "/products" },
        { name: "Tours", to: "/products/type/tour" },
        { name: "Transfers", to: "/products/type/transfer" },
        { name: "Packages", to: "/products/type/package" },
        { name: "Accommodation (Soon)", to: "/products/type/accommodation" },
      ],
    },

    {
      name: "About",
      to: "/about",
      type: "link",
    },

    {
      name: "Contact Us",
      to: "/contact",
      type: "link",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileDropdown(null);
      }
    };

    const onPointerDown = (event) => {
      if (!navRef.current) return;

      if (!navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium after:block after:absolute after:left-0 after:h-[2px] after:bg-current after:-bottom-2 after:transition-all after:duration-300 ${
      scrolled ? "text-black hover:text-[#223441]" : "text-white hover:text-white/80"
    } ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <>
      {/* Navbar */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-black/10 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={zazuLogo} alt="Zazu Adventures" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            {navLinks.map((link) => {
              if (link.type === "link") {
                return (
                  <NavLink key={link.name} to={link.to} className={linkClass}>
                    {link.name}
                  </NavLink>
                );
              }

              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-black hover:text-[#223441]"
                        : "text-white hover:text-white/80"
                    }`}
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === link.name ? null : link.name
                      )
                    }
                  >
                    {link.name}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.name && (
                    <div className="absolute left-0 mt-4 w-64 rounded-2xl bg-white shadow-2xl overflow-hidden py-3">
                      {link.items.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#223441]"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu
                size={30}
                className={scrolled ? "text-black" : "text-white"}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <img src={zazuLogo} alt="logo" className="h-12 w-auto" />

          <button onClick={() => setIsOpen(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="px-6 pb-10">
          <NavLink
            to="/"
            className="block py-4 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          {navLinks.map((link) => {
            if (link.type === "link") {
              return (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className="block py-4 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              );
            }

            return (
              <div key={link.name}>
                <button
                  className="w-full flex justify-between py-4 font-medium"
                  onClick={() =>
                    setMobileDropdown((current) =>
                      current === link.name ? null : link.name
                    )
                  }
                >
                  {link.name}
                  <ChevronDown
                    className={
                      mobileDropdown === link.name ? "rotate-180" : ""
                    }
                  />
                </button>

                <div
                  className={`overflow-hidden ${
                    mobileDropdown === link.name ? "pb-4" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-4 pl-2">
                    {link.items.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className="text-sm text-gray-600"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
