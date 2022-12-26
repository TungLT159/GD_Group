import Styles from "./Button.module.css";

type Props = {
  text: string;
};

function Button({ text }: Props) {
  return <button className={Styles.btn}>{text}</button>;
}

export default Button;
