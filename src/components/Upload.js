import React, { useRef } from "react";
import S3 from "react-aws-s3";
//window.Buffer = window.Buffer || require("Buffer").Buffer;
var AWS = require('aws-sdk');
//import S3 from 'react-aws-s3';
//var fs =  require('fs');

function Upload() {
  const fileInput = useRef();
  const textInput = useRef();

  const handleClick = (event) => {
//  console.log("something");
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
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
//    var myBucket = 'testbucket-347985515607';
//
////    var myKey = 'text';
//    var params = {
//      Body: newFileName,
//      Bucket: myBucket,
//      Key: file
//     };
//    console.log("about to read the file and upload to s3");
//    s3.putObject(params, function(err, file) {
//     if (err) {
//        alert(err);
//        console.log(err)
//     } else {
//        console.log("Successfully uploaded data to myBucket/myKey");
//     }
//    });

    const config = {
        apiVersion: "2010-12-01",
//        bucketName: process.env.REACT_APP_BUCKET_NAME,
        region: process.env.REACT_APP_REGION,
        accessKeyId: process.env.REACT_APP_ACCESS,
        secretAccessKey: process.env.REACT_APP_SECRET,
    }
    console.log("printing config");
    console.log(config);
    AWS.config.update(config);

//    const ReactS3Client = new S3(config);
    /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */

//    ReactS3Client
//        .uploadFile(file, newFileName)
//        .then(data => console.log(data))
//        .catch((err) => {
//            console.log("There was an error");
//            alert(err);
//            console.log(err);
//            console.error(err);
//        });
    var s3 = new AWS.S3();
    s3.upload({
            Key: newFileName,
            Body: file,
            Bucket: process.env.REACT_APP_BUCKET_NAME,
            ACL: 'public-read'
            }, function(err, data) {
            if(err) {
            alert(err);
            console.error(err);
//            reject('error');
            }
            alert('Successfully Uploaded!');
            });
//            .on('httpUploadProgress', function (progress) {
//            var uploaded = parseInt((progress.loaded * 100) / progress.total);
//            $("progress").attr('value', uploaded);
//          });
    console.log("outside the react s3 client");
      /**
       * {
       *   Response: {
       *     bucket: "myBucket",
       *     key: "image/test-image.jpg",
       *     location: "https://myBucket.s3.amazonaws.com/media/test-file.jpg"
       *   }
       * }
       */
    };

//    const ReactS3Client = new S3(config);
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
//    console.log(newFileName);
    console.log(textInput);
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