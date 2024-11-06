export const ErrorComponent = ({ message }) => {
    return <div>{message || "Error: page not found."}</div>;
  };