export default function Resume() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "../../public/Christopher_Phelps_Resume.pdf";
    link.download = "Christopher_Phelps_Resume.docx.pdf";
    link.click();
  };
  return (
    <div className="flexDiv">
      <h1>Resume</h1>
      <div style={{ height: "500px", width: "100%" }}>
        <iframe
          src="/Christopher_Phelps_Resume.pdf" 
          style={{ width: "100%", height: "100%" }}
          frameBorder="0"
          title="PDF Viewer"
        ></iframe>
      </div>

      <div className="d-flex justify-content-center">
        <button onClick={downloadResume} className="btn btn-dark" id="resume">
          Download Resume
        </button>
      </div>
    </div>
  );
}
