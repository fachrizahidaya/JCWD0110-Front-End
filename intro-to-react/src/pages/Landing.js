import { List } from "../components/List";

export const Landing = () => {
  return (
    <div>
      <List />
    </div>
  );
};

function salam() {
  const greet = "hello";
  return <div>{greet}</div>;
}

export { salam };
