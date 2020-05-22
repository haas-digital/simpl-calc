FROM node:10-alpine as frontend
RUN apk add --no-cache git
USER node
WORKDIR /home/node
COPY package.json package-lock.json ./
RUN npm install
COPY gulpfile.js .eslintrc.js webpack.config.js gulpfile.js ./
COPY js ./js
COPY frontend ./frontend
RUN npx gulp build
CMD ["npm", "run", "start"]


FROM python:3.6 as backend
LABEL Description="Image for simpl-calc-ui" Vendor="Wharton" Version="0.1.0"

WORKDIR /code

COPY ./requirements.txt ./
RUN pip install -r /code/requirements.txt
COPY . ./
COPY --from=frontend /home/node/staticfiles/webpack_bundles ./staticfiles/webpack_bundles
COPY --from=frontend /home/node/webpack-stats ./
RUN ./manage.py collectstatic --noinput
ENV PYTHONPATH /code:$PYTHONPATH
ENV MODEL_SERVICE_WS ws://localhost:8080/ws

EXPOSE 8000
CMD ["./manage.py", "runserver", "0.0.0.0:8000"]
