import MenuDesktop from "./menu/desktop";
import MenuMobile from "./menu/mobile";

export default function Header() {
  return (
    <div className="py-4">
      <MenuDesktop />
      <MenuMobile />
    </div>
  );
}
