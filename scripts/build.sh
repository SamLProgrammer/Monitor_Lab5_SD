docker build -t lab5_img .
docker network create --subnet=119.18.0.0/16 mynet
docker run -d --name instance${1} -p 500${1}:5000 --net mynet --ip 119.18.0.${1} lab5_img