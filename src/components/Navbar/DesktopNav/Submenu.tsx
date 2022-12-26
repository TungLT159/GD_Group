import "./style1/style.css";

type Props = {
  children: React.ReactNode;
};

function Submenu({ children }: Props) {
  return <>{children}</>;
}

export default Submenu;
