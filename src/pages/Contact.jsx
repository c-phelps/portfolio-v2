export default function Contact() {
  return (
    <div className="flexDiv">
      <h1>Contact Me</h1>
      <form>
        <div className="form-group to-hover">
          <span className="tooltipText">This field is required.</span>
          <label for="emailName">Email address</label>
          <input type="email" className="form-control to-hover" id="emailName" placeholder="name@email.com" />
        </div>
        <div className="form-group">
          <label for="emailSubject">Email subject</label>
          <input type="text" className="form-control" id="emailSubject" placeholder="Email Subject" />
        </div>
        <div className="form-group to-hover">
          <span className="tooltipText">This field is required</span>
          <label for="emailBody">Email body</label>
          <textarea className="form-control" id="emailBody" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-dark" id="emailSubmit">
          Send
        </button>
      </form>
    </div>
  );
}
