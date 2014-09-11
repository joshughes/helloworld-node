FROM itriage/node

WORKDIR /mnt/app
ENV PORT 3535
EXPOSE 3535
RUN ["npm", "install"]

CMD ["node", "server.js"]
