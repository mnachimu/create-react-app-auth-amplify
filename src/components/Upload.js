import React, { useRef } from "react";
import S3 from "react-aws-s3";

function Upload() {
  const fileInput = useRef();
  const textInput = useRef();
  const handleClick = (event) => {
  console.log("something");
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    console.log(process.env.USER_BRANCH);
    console.log(process.env.AK);
    console.log(process.env.SC);
    const config = {
      bucketName: 'testbucket-762673298322',
      dirName: process.env.REACT_APP_DIR_NAME /* optional */,
      region: 'us-west-1',
      accessKeyId: process.env.AK,
      secretAccessKey: process.env.SC,
    };
    console.log("printing config");
    console.log(config);
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    }).catch((err)=>{
        alert(err);
        console.log(err);
    });
    console.log(newFileName);
    console.log(textInput);
    console.log(config.bucketName);
    console.log(config);
  };
  return (
    <>
      <form className='upload-steps' onSubmit={handleClick}>
        <br />
        <label>Text Input : </label>
        <input type="text" ref={textInput} />
        <br />
        <br />
        <label>

          File Input : &nbsp;
          <input type='file' ref={fileInput} />
        </label>
        <br />
        <br />
        <button type='submit'>Upload</button>
      </form>
    </>
  );
}

export default Upload;