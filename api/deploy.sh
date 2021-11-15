scp api.py root@81.169.253.238:/var/www/api.philipp-panhey.de/api.py
ssh -t root@81.169.253.238 'sudo service apache2 restart'