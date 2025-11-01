all:
	docker-compose up

wipe:
	@echo "⚠️  Cleaning all Docker resources..."
	@docker stop $$(docker ps -aq) 2>/dev/null || true
	@docker rm -f $$(docker ps -aq) 2>/dev/null || true
	@docker rmi -f $$(docker images -aq) 2>/dev/null || true
	@docker volume rm -f $$(docker volume ls -q) 2>/dev/null || true
	@docker network rm $$(docker network ls -q | grep -v "bridge\|host\|none") 2>/dev/null || true
	@docker system prune -af --volumes
	@echo "✅ Docker cleaned successfully!"


build:
	npm --prefix react run build
	@echo "✅ build successfully!"
	npm --prefix react run deploy
	@echo "✅ deploy successfully!"