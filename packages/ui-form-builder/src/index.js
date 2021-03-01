import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { BuilderComponent } from '@builder.io/react';

import { adapt } from "webcomponents-in-react";
import editor from '@builder.io/editor';
const BuilderEditor = adapt("builder-editor");

const initialData = {
  "data":{
    "blocks":[
      // {
      //   "@type":"@builder.io/sdk:Element",
      //   "@version":2,
      //   "id":"builder-ee480423fc424372984d8a0a424870f0",
      //   "component":{
      //     "name":"Text",
      //     "options":{"text":"Enter some text..."}
      //   },
      //   "responsiveStyles":{"large":{"position":"relative"}}
      // }
    ]
  }
}
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/content" exact component={Home} />
          <Route path="/" exact component={Admin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () =>  {
  return (
    <BuilderComponent />
  )
}


const Admin = () => {
  const builderOptions = {
     useDefaultStyles: false,
     hideAnimateTab: true,
     previewUrl: 'http://localhost:3000/content',
  };
  const builderData = {}
  return (
    <BuilderEditor
        onChange={(e) => {
          console.log(e)
        }}
        data={{}}
        env='production'
        options={builderOptions}/>
  ) 
};


const NotFound = () => <h1>No page found for this URL, did you publish it?</h1>;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
