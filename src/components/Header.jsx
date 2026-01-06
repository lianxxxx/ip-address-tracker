import bgMobile from "../assets/img/pattern-bg-mobile.png";
import bgDesktop from "../assets/img/pattern-bg-desktop.png";

function Header() {
  return (
    <header className="relative h-64">
      {/* Background Image for Mobile */}
      <img
        src={bgMobile}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Background Image for Desktop */}
      <img
        src={bgDesktop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      <div className="relative z-10 px-6 pt-6 text-white">
        <h1 className="text-2xl font-medium text-center">IP Address Tracker</h1>
      </div>
    </header>
  );
}

export default Header;
