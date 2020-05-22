#!/bin/bash
# Run this script one-time to setup the project state

docker-compose up --detach
# Create the initial API User
docker-compose run --rm api ./manage.py create_simpl_user
# Create the simple-calc users and initialize the game
docker-compose run --rm model.backend ./manage.py create_default_env
# Initialize the UI database
docker-compose run --rm ui.backend ./manage.py migrate --noinput
docker-compose down
