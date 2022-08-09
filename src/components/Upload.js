import React, { useRef } from "react";
import S3 from "react-aws-s3";
var AWS = require('aws-sdk');
//var fs =  require('fs');

function Upload() {
  var s3 = new AWS.S3();
  const fileInput = useRef();
  const textInput = useRef();

  const handleClick = (event) => {
//  console.log("something");
//    event.preventDefault();
//    let file = fileInput.current.files[0];
//    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
//    console.log(process.env.USER_BRANCH);
//    console.log(process.env.AK);
//    console.log(process.env.SC);
//    const config = {
//      bucketName: 'testbucket-762673298322',
//      dirName: process.env.REACT_APP_DIR_NAME /* optional */,
//      region: 'us-west-1',
//      accessKeyId: process.env.AK,
//      secretAccessKey: process.env.SC,
//    };
//    const handleSubmit = (event) => {
//        // Initialize the Amazon Cognito credentials provider
//        const s3 = new S3Client({
//          region: REGION,
//          credentials: fromCognitoIdentityPool({
//            client: new CognitoIdentityClient({ region: REGION }),
//            identityPoolId: "IDENTITY_POOL_ID", // IDENTITY_POOL_ID
//          }),
//        });
    var myBucket = 'testbucket-347985515607';

    var myKey = 'text';
    console.log("about to read the file and upload to s3");
    console.log();
    s3.putObject(params, function(err, file) {
     if (err) {
        alert(err);
        console.log(err)
     } else {
        console.log("Successfully uploaded data to myBucket/myKey");
     }
    });
    };

    console.log("printing config");
    console.log(config);
    const ReactS3Client = new S3(config);
//    ReactS3Client.uploadFile(file, newFileName).then((data) => {
//      console.log(data);
//      if (data.status === 204) {
//        console.log("success");
//      } else {
//        console.log("fail");
//      }
//    }).catch((err)=>{
//        alert(err);
//        console.log(err);
//    });
    console.log(newFileName);
    console.log(textInput);
    console.log(config.bucketName);
    console.log(config);
//  };
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