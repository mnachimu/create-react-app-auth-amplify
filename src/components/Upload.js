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
    const config = {
      bucketName: 'testbucket-762673298322',
      dirName: process.env.REACT_APP_DIR_NAME /* optional */,
      region: 'us-west-1',
      accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
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