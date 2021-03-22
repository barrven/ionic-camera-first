### Command used to get template
$ ionic start mygallery tabs --type=angular --capacitor

### install dependancy for using the camera
$ npm install @ionic/pwa-elements

### start app
ionic serve

### generate photo service
The "g" stands for generate
generates the folder services inside src/app

$ ionic g service services/photo

### build the app

$ ionic build

### add the platform you want to build your app for 

$ ionic cap add android

### Commands that sync source files and files for different native platforms

$ ionic cap copy //Creates copy of www folder with all the course files
$ ionic cap sync //syncs files and dependencies
$ ionic cap open android //open android studio
