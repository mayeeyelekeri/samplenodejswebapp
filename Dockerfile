FROM node:13.12.0-alpine 

WORKDIR /usr/app
COPY ./ /usr/app

RUN npm config set proxy http://dojproxy.atf.gov:8080
#RUN npm config set http_proxy http://dojproxy.atf.gov:8080
#RUN npm config set https_proxy http://dojproxy.atf.gov:8080

# Install all modules for the app 
RUN npm install 

# perform build, in our case, just copy all required files to "target" dir 
RUN mkdir target || echo 0 
RUN ls -lrt 
RUN cp -r server.js calc.js static node_modules target 
RUN ls -lrt target 

# Setup execution command for the container 
CMD ["node", "target/server.js"]
