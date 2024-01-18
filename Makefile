IMAGE_NAME := node:15

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker logs desafio-db

