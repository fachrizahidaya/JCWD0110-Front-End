export const List = () => {
  const styles = {
    ol: {
      backgroundColor: "aqua",
    },
  };
  return (
    <div>
      <ol style={styles.ol}>
        <li>Dicco</li>
        <li>Rizal</li>
        <li className="febri">Febri</li>
      </ol>
    </div>
  );
};
