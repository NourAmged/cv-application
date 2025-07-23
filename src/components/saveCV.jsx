import jsPDF from "jspdf";

function SaveResume({ cvRef }) {
  const save = () => {
    const doc = new jsPDF("p", "pt", "a4");

    if (!cvRef.current) return;

    doc.html(cvRef.current, {
      callback: function (doc) {
        doc.save("cv.pdf");
      },
    });
  };

  return (
    <div className="cv-download-container">
      <div className="cv-download">
        <p>Save your resume</p>
        <button className="download-btn" onClick={save}>
          Download
        </button>
      </div>
    </div>
  );
}

export default SaveResume;
