import React from 'react';
import './file.css'
import { Link, useLocation, useNavigate } from "react-router-dom";

function FilePage({ data }) {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const parts = currentPath.split("/"); // Split the string into an array
  const secondLastElement = parts[parts.length - 1]; // Get the second-to-last element
  console.log({ currentPath });
  console.log({ secondLastElement });

  // const keys = Object.keys(data);
  return (
    <div className='container'>
      <div className='card'>
        <div onClick={() => navigate(-1)}>Back to <strong>{secondLastElement}</strong> </div>
        <div className='searchBar'>
          <input placeholder='Search File' type='text' />
          <div>icon</div>
        </div>
      </div>

      <h1>Files</h1>
      <div className='list'>
        {Object.keys(data).map((fileName, index) => (
          <div key={index}  >
            {typeof data[fileName] === "object" ? (
              <div className='card' >
              <Link to={`${currentPath}/${fileName}`}>{fileName}</Link>
              <div className='d-flex minWidth40'>
                <div className='cG'>Uploader Name</div>
                <div className='cG'>Size</div>
                <div className='cG'>Lasted Updated</div>
                {/* <div onClick={() => { alert(`${fileName} clicked`) }}>Download</div> */}
              </div>
            </div>              
            ) : (
              <div className='card' >
                <div>{fileName}</div>
                <div className='d-flex minWidth40'>
                  <div className='cG'>Uploader Name</div>
                  <div className='cG'>Size</div>
                  <div onClick={() => { alert(`${fileName} clicked`) }}>Download</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilePage;
