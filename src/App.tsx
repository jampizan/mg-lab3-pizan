import { useState, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface BookRequestForm {
  studentname: string;
  studentid: string;
  booktitle: string;
  author: string;
  reason: string;
}

function App() {
  const [studentname, setStudentName] = useState<string>("");
  const [studentid, setStudentID] = useState<string>("");
  const [booktitle, setBookTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const [submittedData, setSubmittedData] = useState<BookRequestForm | null>(null);

  const studentnameRef = useRef<HTMLInputElement>(null);
  const studentidRef = useRef<HTMLInputElement>(null);
  const booktitleRef = useRef<HTMLInputElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLTextAreaElement>(null);

  const handleControlledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: BookRequestForm = {
      studentname,
      studentid,
      booktitle,
      author,
      reason
    };

    setSubmittedData(data);

    setStudentName("");
    setStudentID("");
    setBookTitle("");
    setAuthor("");
    setReason("");
  };

  const handleUncontrolledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (studentnameRef.current && studentidRef.current && booktitleRef.current
      && authorRef.current && reasonRef.current) {
      const data: BookRequestForm = {
        studentname: studentnameRef.current.value,
        studentid: studentidRef.current.value,
        booktitle: booktitleRef.current.value,
        author: authorRef.current.value,
        reason: reasonRef.current.value
      };

      console.log("Uncontrolled Form Data:", data);
      alert("Check the console for submitted data");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Book Request Form</h1>

      <h2>Controlled Form</h2>
      <form onSubmit={handleControlledSubmit} className="mb-5">

        <div className="mb-3">
          <label className="form-label">Student Name:</label>
          <input
            type="text"
            className="form-control"
            value={studentname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Student ID:</label>
          <input
            type="text"
            className="form-control"
            value={studentid}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStudentID(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Book Title:</label>
          <textarea
            className="form-control"
            value={booktitle}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setBookTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author:</label>
          <textarea
            className="form-control"
            value={author}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setAuthor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Reason:</label>
          <textarea
            className="form-control"
            value={reason}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setReason(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Controlled Form</button>
      </form>

      {submittedData && (
        <div className="alert alert-success">
          <h4>Submitted Feedback</h4>
          <p><strong>Student Name: </strong> {submittedData.studentname}</p>
          <p><strong>Student ID: </strong> {submittedData.studentid}</p>
          <p><strong>Book Title: </strong> {submittedData.booktitle}</p>
          <p><strong>Author: </strong> {submittedData.author}</p>
          <p><strong>Reason: </strong> {submittedData.reason}</p>
        </div>
      )}

      <hr className="my-5"/>

      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleUncontrolledSubmit}>

        <div className="mb-3">
          <label className="form-label">Student Name:</label>
          <input type="text" ref={studentnameRef} className="form-control"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Student ID:</label>
          <input type="text" ref={studentidRef} className="form-control"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Book Title:</label>
          <input type="text" ref={booktitleRef} className="form-control"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Author:</label>
          <input type="text" ref={authorRef} className="form-control"/>
        </div>

        <div className="mb-3">
          <label className="form-label">Reason:</label>
          <textarea ref={reasonRef} className="form-control"/>
        </div>

        <button type="submit" className="btn btn-success">Submit Uncontrolled Form</button>
      </form>

    </div>
  );
}

export default App;