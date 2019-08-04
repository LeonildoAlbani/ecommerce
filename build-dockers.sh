#sim, seria melhor fazer um docker-compose com build neste caso para uma solução mais "definitiva".
#mas como não há tempo... hehe

docker-compose down

cd /Users/leonildo.albani/Documents/dev/pessoal/ecommerce/ecommerce-frontend
docker build -f Dockerfile -t leonildoalbani/ecommerce-frontend .
docker push leonildoalbani/ecommerce-frontend

cd /Users/leonildo.albani/Documents/dev/pessoal/ecommerce/ecommerce-backend
./mvnw clean package -DskipTests #esse skipTests não está aqui :)
docker build -f src/main/docker/Dockerfile.jvm -t leonildoalbani/ecommerce-backend .
docker push leonildoalbani/ecommerce-backend

cd /Users/leonildo.albani/Documents/dev/pessoal/ecommerce

docker-compose up -d