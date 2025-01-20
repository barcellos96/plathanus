import MenuDesktop from "./menu/desktop";
import MenuMobile from "./menu/mobile";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 py-4 bg-white z-50">
      <MenuDesktop />
      <MenuMobile />
    </div>
  );
}
