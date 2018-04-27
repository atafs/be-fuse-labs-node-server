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