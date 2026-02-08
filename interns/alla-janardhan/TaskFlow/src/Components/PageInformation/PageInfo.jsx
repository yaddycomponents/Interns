function PageInfo({ title, description}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >

        <h1
          style={{
            margin: 0,
            fontSize: 24,
            fontWeight: 600,
            color: '#14532d',
          }}
        >
          {title}
        </h1>
      </div>

      {description && (
        <p
          style={{
            marginTop: 6,
            marginBottom: 0,
            fontSize: 14,
            color: '#6b7280',
            maxWidth: 600,
            padding: '10px 0px'
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default PageInfo;
