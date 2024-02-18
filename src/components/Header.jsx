import Logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  );
}
