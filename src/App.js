import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import Upload from "./components/Upload";
Amplify.configure(aws_exports);

function App() {
  return (
    <div>
      <Upload />
    </div>
  );
}

export default App;
