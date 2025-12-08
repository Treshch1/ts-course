FROM node:24-slim
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
RUN apt-get update
RUN apt-get install -y curl git

WORKDIR /usr/src/app
RUN git clone https://github.com/AhmedShaykh/Expense-Tracker-App-With-React.JS.git
WORKDIR /usr/src/app/Expense-Tracker-App-With-React.JS
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 3000
