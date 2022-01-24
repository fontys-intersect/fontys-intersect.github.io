# Getting Started with the project

This project has been set up using React Typescript base in combination with a UI library. In order to run this project a couple of things need to be installed;
* An integrated development environment (IDE), preferably Visual studio code
* Node Package Manager (NPM) and NodeJS


## Installing the project

After the installation is done, the packages can be installed. These can be installed using the `npm install` command, this commands simply installs the required packages that are mentioned in the ‘package.json’ file. After the installation of the packages, the web server can be started using the `npm start` command. This commands creates a development server on your device on ‘http://localhost:3000’, this instance will auto-refresh after saving a file that will be rendered. An example of this file can be found in ‘src/components/homepage.tsx’.

## UI

The UI has been set-up with Chakra-UI, this is a react-based UI library which uses styled components. The usage is similar to regular HTML components, but has the additional CSS which is bound to the component. The files have been set-up using a structured format which has been followed throughout the development of the website. More information on the usage of the library and the library itself can be found on their website: https://chakra-ui.com/docs/getting-started .


## Deployment

The website is deployed with the usage of Github Pages. This allows the developers to host a website within a subdomain of GitHub, this is achieved for this project with the use of a package which allows the deployment through a simple command; This command can be used within the Visual Studio Code terminal (within the project directory); To deploy the website, the future users need to create a build of the project (this can be done with the `npm build` command) afterwards the site can be deployed with the `npm deploy` command. The results of the deploy can take up to 5 minutes to show.

## Project Structure

The website is made up of several pages, the content of the website can be found below the components tab.
* src
  * Components
    * Footer
    * NavBar
    * Pages
      * Articles
      * BestPractices
      * Cases
      * Owasp
      * Tooling
              
## Creating new pages

Creating new pages will be done by creating a new ‘.tsx’ file within one of the folders that relate to the subject. An example of this is creating a page for a newly researched case, this file will be placed in a newly created folder (the name of the folder will be the case name) and within this folder you will be able to create a file called ‘index.tsx’. The structure of the file can be copied from another file that contains similar content, after getting the structure copied make sure the name of the ‘const’ will be changed to the case’s name. This name will be used to create a working link.
Creating the routing will be done within ‘src/router.tsx’, this will be done by adding the following syntax: 
`<Route path="/Collective Folder/Item folder" exact component={Content} />`
Within this code a couple of things need to be changed:
‘Collective Folder’ will need to be replaced with case/tooling/bestpractices etc.
‘Item folder’ needs to be changed with the name of the content (this name can be the same as the name of the component)
‘Content’ needs to be replaced with the name of the exported component (An example of this is Certificates), the name needs to give a small insight of the components content.

## Naming conventions

Folder names always start with a capital letter.
Names of the files, like ‘index.tsx’ or ‘passwords.tsx’ will not start with a capital letter, however the next word within the filename needs to be capitalized.
The name of the exported component always starts with a capital letter.

## Adding libraries within the website

This can be done with the npm install command, adding the package that needs to be added to the project allows for the installation of a specific package. However, adding another package might come with security risks so be sure to discuss and/or perform some research to make sure adding the library will be safe and have an added value to the project.
Example of an installation: `npm i recaptcha-v3`. Within this command, you can see the install command has been shortened to ‘i’ which will have the same result. If the installed package needs to be uninstalled, you can run the `npm uninstall packagename` command.

## Adding images

Adding images can be done by adding them to the correct folder. Within this project the folder that is used is `public/assets/images`. By adding an image within this folder, the image will be able to be used and correctly mapped for it’s deployment. 

## Template file

We created an additional page that serves as a template page for creating pages,
This file is named ‘template.tsx’ it contains basic information regarding components and shows examples on how to implement Lists, Links, basic text components etc. By copying this template file, renaming it and changing the ‘export const Burpsuite’ to for example ‘export const Monitoring’, if you wish to name your component that (This will also be what you refer to as the component name in the router). You can then change the file and add information as you wish. For a more detailed overview of these HTML- like components that are used in this template as well as the other pages, you can check out this page https://chakra-ui.com/docs/getting-started.
