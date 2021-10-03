docker run -d --name instance${1} -p 500${1}:5000 --net mynet --ip 119.18.0.${1} lab5_img
docker exec -i instance${1} sh -c 'cat > ./ip_list.txt' < ./scripts/ip_list.txt