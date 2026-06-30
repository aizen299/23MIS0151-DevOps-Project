# ABC Technologies — Website Container
FROM nginx:alpine

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy site files into nginx's web root
COPY . /usr/share/nginx/html

# Nginx listens on 80 by default
EXPOSE 80

# nginx image already has a sensible default CMD, but being explicit:
CMD ["nginx", "-g", "daemon off;"]
