FROM cypress/base:12

COPY package.json package.json
RUN npm i
RUN npm run install-all



COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
COPY ./server ./server
COPY ./public ./public
RUN npm run dev-server

CMD ["npm", "run", "cy:run"]
