import "../styles/styles.css";

export default function Square(props) {
  return (
    <div className={props.style} onClick={props.onClick}>
      {props.value}
    </div>
  );
}
