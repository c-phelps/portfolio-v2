function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-2 flexDiv">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 mx-auto">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i> Southern Pines, NC, United States
              </li>
              <li>
                <i className="fas fa-phone"></i> (808) 228-6855
              </li>
              <li>
                <i className="fas fa-envelope"></i> c.j.phelps89@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p className="mb-0">Made with love by Chris Phelps</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
