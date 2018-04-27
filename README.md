# fuse-labs-node-server
Create a node server

## start the app
> nodemon server.js

## config heroku
#### install heroku cli
> brew install heroku/brew/heroku

#### check the instalation
> heroku --help

#### start heroku
> heroku init

#### login
> heroku login

#### add ssh keys
> heroku keys:add

#### check ssh connection
> ssh -v git@heroku.com

#### create the app
> heroku create

#### push with git
> git push heroku

#### rename the app url
> heroku apps:rename fuse-labs-arduino-lights


#### update git remotes
> git remote rm heroku

> heroku git:remote -a fuse-labs-arduino-lights

## config local mongoDB
#### download mongoDB: https://www.mongodb.com/download-center#community

#### unpack the zip folder, rename it to mongo add place it in the user directory

#### create the data directory
> mkdir ~/mongo-data

#### go to directory and run the db
> cd ~/mongo/bin

> ./mongod --dbpath ~/mongo-data


