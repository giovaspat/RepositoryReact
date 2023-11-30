export function Welcome({ name }) {
  return (
    <div>
      <p>Welcome {name}!</p>
    </div>
  );
}

Welcome.defaultProps = {
  name: "George",
};
