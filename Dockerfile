FROM itriage/node

WORKDIR /mnt/app

RUN ["npm", "install"]

ENTRYPOINT ["node", "server.js"]
