#!/bin/bash

apt-get install nginx < <( echo Y)

cat << EOF > /etc/nginx/sites-enabled/default
server {
	listen 80;
	root "$PWD/ui";

	location / {
		alias "$PWD/ui/";
		try_files index.html =404;
	}

	location /api/ {
		proxy_pass http://127.0.0.1:5000/;
        proxy_redirect off;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \scheme;
	}

	location ~ /\.ht {
		deny all;
	}
}
EOF

/etc/init.d/nginx stop
/etc/init.d/nginx start