#FROM node:14
#WORKDIR /app
#COPY . .
#RUN npm install --no-fund
#CMD ["npm", "run", "serve"]






# Use an official Nginx runtime as a parent image
FROM nginx:1.21 

# Copy the build output from the build stage to the Nginx public directory
COPY  Web/ /usr/share/nginx/html


# Command to run the application (for production build)
CMD ["nginx", "-g", "daemon off;"]


################################## 
# FROM node:14 as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --production
# COPY . .
# RUN npm run build

# FROM nginx:1.21
# COPY --from=build-stage /app/dist /usr/share/nginx/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]


###
