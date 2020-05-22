# Simpl Calc

This is a sample game built on the [Simpl](https://simpl.world/) simulation platform. It includes code for both the [model service](https://simpl.world/docs/services/modelservice/) (`model`) and user-facing frontend using [simpl-react](https://simpl.world/docs/services/simpl-react/) (`ui`).

While it's possible to setup/install the individual components manually, the recommended way to run Simpl Calc locally is with [Docker Compose](https://docs.docker.com/compose/). If you are developing on MacOS or Windows, you'll need [Docker Desktop](https://docs.docker.com/desktop/) installed. Follow the [instructions here for Linux](https://docs.docker.com/compose/install/).

## Setup

To setup the project, run:

```bash
./bootstrap.sh
```

If you are on a Windows machine without access to `bash`, you can simply copy-and-paste the commands from that script into your terminal.

This will setup the databases and initial state needed for the project. It only needs to be run once.

## Run

After bootstrapping the environment, you can start the project services with:

```bash
docker-compose up
```

This will start the following services:

* A Postgres database
* The [`simpl-games-api`](https://github.com/simplworld/simpl-games-api)
* The simpl-calc model service
* The development Django webserver for the simpl-calc UI
* A Webpack watcher to rebuild the UI Javascript if files in the repo are changed.

You should now be able to visit the simpl-calc UI at `http://localhost:8000` and login as one of the following users:

* user: `leader@calc.edu`  
  password: `leader`
* user: `s1@calc.edu`  
  password: `s1`
* user: `s2@calc.edu`  
  password: `s2`
