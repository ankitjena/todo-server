# todo-server

To set up the server run the following commands.
```
git clone https://github.com/ankitjena/todo-server.git
cd todo-server
npm install
```

To set up mongodb server in your local machine, we are going to use docker.
Install docker from [here](https://docs.docker.com/install/)

After successful installation, run the following commands
```
docker run --name mongo -p 27017:27017 mongo
```
This will pull the mongodb image and set it up.
Start mongodb with this command everytime you start
your machine.
```
docker start mongo
```

To start the server(remember to start the mongo container before)
```
npm start
```