# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
# fix permissions problem
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
# add app
COPY . ./
# start app
CMD ["npm", "start"]