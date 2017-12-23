# FROM debian:stretch-slim
FROM livingdocs/nvm

# app specific npm & node version
# ADD ./.nvmrc /app/.nvmrc

# app installation
WORKDIR /app
ADD ./ /app
RUN bash -c '. /usr/share/nvm/nvm.sh && cd /app && nvm install v6.4 && nvm use v6.4'
RUN npm install

ENV EBENEZER_API_URL 'backend'
ENV EBENEZER_API_PORT 3000

EXPOSE 3001

CMD ["npm", "run", "dev"]