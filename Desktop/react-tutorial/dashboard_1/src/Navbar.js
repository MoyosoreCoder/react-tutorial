const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Welcome,Nav links here</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "#333",
            backgroundColor: "#a9620b",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
