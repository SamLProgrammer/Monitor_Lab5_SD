docker run --name instancia5 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=a -d mysql:5.6
docker exec instancia5 bash -c "apt update -y; apt-get update-y; apt-get install -y git; mkdir lab3; cd lab3"