# Homiies - The Home Management App

<p>Living with roommates <b>isn't always easy.</b> Avoid miscommunicated expectations</b> with your roommates, let Homiies <b>balance household responsibilities</b> and keep track of who's doing what.</p>

![homiies-cover](https://user-images.githubusercontent.com/55995794/102566467-9a77e280-40ad-11eb-9e3a-b738e644dabe.png)

<h2> Our Team </h2>
<h3><b> Victoria Stauffer </b></h3>
<p>Primary Role: Project Manager</p>
<p>Secondary Role: Developer</p>
<h3><b> Dolma Sherpa </b></h3>
<p>Primary Role: UI Design Lead</p>
<p>Secondary Role: Project Manager </p>
<h3><b> Anna Leong </b></h3>
<p>Primary Role: UX Design Lead</p>
<p>Secondary Role: IX Designer</p>
<h3><b> Mikayla Lisiy </b></h3>
<p>Primary Role: Dev Lead </p>
<p>Secondary Role: UI Designer </p>
<h3><b> Lindsey Smith </b></h3>
<p>Primary Role: IX Lead</p>
<p>Secondary Role: UX Research</p>

<hr></hr>

<h1> How to run app locally: </h1>

<h3><b>1)</b> Make sure the following dependencies are downloaded </h3>

<ul>
  <li> <a href="https://nodejs.org/en/" target="_blank">Node js</a> <b> To check your node version:</b>
    
    node -v
    
  </li>
  <li> <a href="https://yarnpkg.com/" target="_blank">Yarn</a>  <b> To check your yarn version:</b>
      
    yarn -v
    
  </li>
</ul>

<h3><b>2)</b> Clone this repository to your repo management system </h3>

<h3><b>3)</b> Open your folder in vs code and see if the following debug scripts are in package.json (lines 14-19)</h3>

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

<h3><b>If there is a folder called node modules in the root of your project, delete them. Also delete package-lock.json file. </h3>
  
<h3><b>4) In command line, direct to root of your project folder. Example:</h3>
  
  ```
  cd C:/Users/Yuri/Desktop/homiies
  ```  
  
  then run these commands 
  
  ```
  npm install //installs node modules + package-lock.json file
  ```
  
  ```
  npm start //loads your local host server
  ```
