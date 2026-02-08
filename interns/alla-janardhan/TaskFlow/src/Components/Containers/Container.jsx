function Container({ children }) {
  return (
    <div
      style={{
        maxWidth: 1100,
        margin: '24px auto',
        padding: '0 24px',
      }}
    >
      {children}
    </div>
  );
}

export default Container;
