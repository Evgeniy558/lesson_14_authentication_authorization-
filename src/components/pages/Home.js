import { Helmet } from "react-helmet";
export const HomePage = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1 style={styles.title}>
        Task manager welcome page
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
};
const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};
