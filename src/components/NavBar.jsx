const NavBar = (props) => {
  const { onCountersTotal, onCountersItemsTotal } = props;
  return (
    <div className="container">
      <nav className="navbar bg-light">
        <button type="button" className="btn btn-info">
          Total Products in cart
          <span className="badge rounded-pill text-bg-dark m-1">
            {onCountersTotal}
          </span>
        </button>
        <button type="button" className="btn btn-info">
          Total items in cart
          <span className="badge rounded-pill text-bg-dark m-1">
            {onCountersItemsTotal}
          </span>
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
