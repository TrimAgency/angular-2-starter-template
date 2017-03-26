FROM node

MAINTAINER TrimAgency


ENV HOME=/usr/src/app
RUN mkdir $HOME
WORKDIR $HOME 

RUN npm install -g @angular/cli
RUN ng set --global packageManager=yarn

EXPOSE 4200
EXPOSE 49153

