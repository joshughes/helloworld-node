FROM itriage/node

WORKDIR /mnt/app

RUN ["npm", "install"]

ENTRYPOINT ["node", "index.js"]
