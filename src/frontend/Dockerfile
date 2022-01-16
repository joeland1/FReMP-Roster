FROM node:latest

EXPOSE 8080

workdir /root

COPY . .

RUN npm install --prefix /root/react-app --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin
RUN npm install --prefix /root/react-app react react-dom react-router-dom
CMD ["npm","start","--prefix=react-app"]