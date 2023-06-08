export default function Profile() {
  const array = [1, 2, 3, 4];
  const obj = {
    name: "Robi",
    age: 23,
  };
  return (
    <div className="Profile">
      <h1> Purwadhika</h1>
      <h2>{array[0]}</h2>
      <h3>{obj.name}</h3>
    </div>
  );
}
