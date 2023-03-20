FROM nginx:latest

RUN   mkdir -p  /var/www/html2

COPY /web-files/.   /var/www/html2

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chmod -R 755 /var/www/html2

EXPOSE 80
