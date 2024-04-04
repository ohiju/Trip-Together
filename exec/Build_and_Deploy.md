### 0. 목차

### 1. 사용 프로그램 버전

| 프로그램 | 버전 |
| --- | --- |
|  |  |
| JVM | 17 |
| Spring Boot | 3.2.1 |
| Spring Security | 6.2.2 |
| JPA | 6.4.1.Final |
| queryDSL | 5.0.0 |
| Junit | 5.0.0 |
| rabbitMQ | 3.13.0 |
|  |  |
| MySQL | 8.0 |
| mongoDB | 7.0.7 |
| Redis | 6.2.6 |
|  |  |
| Jenkins | 2.441 |
| Docker | 25.0.2 |
|  |  |
| React | 18.2.0 |
| react-native | 0.73.6 |
| redux | 5.0.1 |
| TypeScript | 5.0.4 |
| Node.js | 20.11.0 |
| npm | 10.2.4 |
| styled-component | 6.1.8 |
| stompjs | 7.0.0 |
|  |  |
|  |  |

---

### 3. 배포 포트

**Back-End**

- Spring Boot Application : 8080:8080

**NginX (server)**

- 백엔드 서버 : 8080:8080

**DataBase**

- MySQL : 3306:3306
- Redis : 6379:6379
- MongoDB : 8092:27017

**MessageBroker**

- RabbitMQ : 5672:5672

---

### 4. 환경변수 파일

**Back-End(Trip 서버 .env 파일)**

```
# MySQL
DEV_MYSQL_BINDING_PORT=MySQL포트
DEV_MYSQL_DATA_PATH=MySQL테이터저장경로
MYSQL_DATABASE=MySQL데이터베이스명
MYSQL_ROOT_HOST=MySQL호스트
MYSQL_ROOT_PASSWORD=MySQL패스워드

# Redis
DEV_REDIS_BINDING_PORT=Redis포트
DEV_REDIS_HOST=Redis호스트
DEV_REDIS_PASSWORD=Redis패스워드

# Spring
DEV_SPRING_BINDING_PORT=Spring포트
SPRING_PROFILES_ACTIVE=dev

# MongoDB
DEV_TRIP_MONGODB_BINDING_PORT=MongoDB포트
DEV_TRIP_MONGODB_DATA_PATH=MongoDB데이터저장경로
DEV_TRIP_MONGODB_USERNAME=MongoDB사용자명
DEV_TRIP_MONGODB_PASSWORD=MongoDB패스워드
DEV_TRIP_MONGODB_DATABASE=MongoDB데이터베이스명

# RabbitMQ
DEV_TRIP_RABBITMQ_ETC_PATH=RabbitMQ저장경로
DEV_TRIP_RABBITMQ_DATA_PATH=RabbitMQ데이터저장경로
DEV_TRIP_RABBITMQ_LOGS_PATH=RabbitMQ로그저장경로
DEV_TRIP_RABBITMQ_PORT=RabbitMQ포트
DEV_TRIP_WEBSOCKET_PORT=웹소켓포트
DEV_TRIP_STOMP_PORT=STOMP포트
RABBITMQ_HOST=RabbitMQ호스트
RABBITMQ_PORT=RabbitMQ포트
RABBITMQ_DEFAULT_USER=RabbitMQ유저
RABBITMQ_DEFAULT_PASS=RabbitMQ패스워드

# Twinkle-Bank
TWINKLE_CLIENT_ID=test
TWINKLE_REDIRECT_URL=https://j10a309.p.ssafy.io
TWINKLE_SECRET_KEY=test
TWINKLE_BANK_URL=https://j10a309a.p.ssafy.io/api

# externals
JWT_SECRET_KEY=JWT시크릿키
EXCHANGE_RATE_API_KEY=환율API시크릿키
```

**application-dev.yml(Trip 서버)**

```java
spring:
  data:
    redis:
      host: ${REDIS_HOST}
      port: ${REDIS_PASSWORD}
    mongodb:
      uri: mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@${MONGO_HOST}:${DEV_TRIP_MONGODB_BINDING_PORT}/?authSource=admin
      database: ${MONGO_INITDB_DATABASE}
  rabbitmq:
    host: ${RABBITMQ_DEFAULT_HOST}
    port: ${RABBITMQ_BINDING_PORT}
    username: ${RABBITMQ_DEFAULT_USER}
    password: ${RABBITMQ_DEFAULT_PASS}
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: ${SPRING_DATASOURCE_URL}
    username: ${SPRING_DATASOURCE_USERNAME}
    password: ${SPRING_DATASOURCE_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: update

EXCHANGE_RATE_API_KEY: ${EXCHANGE_RATE_API_KEY}
jwt:
  secret: ${JWT_SECRET_KEY}
rabbitmq:
  queue:
    name: chat.queue
  exchange:
    name: chat.exchange
  routing:
    key: room.

```

**docker-compose-dev.yml (Trip 서버)**

```yaml
version: "3"
services:

	# MySQL
  dev_mysql_container:
    container_name: dev_mysql_container
    image: mysql:8.0
    ports:
      - ${DEV_MYSQL_BINDING_PORT}:3306
    volumes:
      - ${DEV_MYSQL_DATA_PATH}:/var/lib/mysql
    environment:
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    restart: no

	# redis
  dev_redis_container:
    container_name: dev_redis_container
    image: redis:6.2.6-alpine
    ports:
      - ${DEV_REDIS_BINDING_PORT}:6379
    restart: no

	# spring
  dev_spring_container:
    container_name: dev_spring_container
    image: docker-dev
    ports:
      - ${DEV_SPRING_BINDING_PORT}:8080
    build:
      context: .
      dockerfile: Dockerfile.dev
    depends_on:
      - dev_mysql_container
      - dev_redis_container
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://${MYSQL_ROOT_HOST}:3306/${MYSQL_DATABASE}
      SPRING_DATASOURCE_USERNAME: ${MYSQL_ROOT_HOST}
      SPRING_DATASOURCE_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      SPRING_PROFILES_ACTIVE: dev
      EXCHANGE_RATE_API_KEY: ${EXCHANGE_RATE_API_KEY}
      JWT_SECRET_KEY: ${JWT_SECRET_KEY}
      REDIS_HOST: ${DEV_REDIS_HOST}
      REDIS_PASSWORD: ${DEV_REDIS_PASSWORD}
      MONGO_INITDB_DATABASE: ${DEV_TRIP_MONGODB_DATABASE}
      MONGO_INITDB_ROOT_USERNAME: ${DEV_TRIP_MONGODB_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD: ${DEV_TRIP_MONGODB_PASSWORD}
      DEV_TRIP_MONGODB_BINDING_PORT: ${DEV_TRIP_MONGODB_BINDING_PORT}
      TWINKLE_CLIENT_ID: ${TWINKLE_CLIENT_ID}
      TWINKLE_REDIRECT_URL: ${TWINKLE_REDIRECT_URL}
      TWINKLE_SECRET_KEY: ${TWINKLE_SECRET_KEY}
      TWINKLE_BANK_URL: ${TWINKLE_BANK_URL}
      RABBITMQ_DEFAULT_HOST: ${RABBITMQ_HOST}
      RABBITMQ_BINDING_PORT: ${RABBITMQ_PORT}
      RABBITMQ_DEFAULT_USER: ${RABBITMQ_DEFAULT_USER}
      RABBITMQ_DEFAULT_PASS: ${RABBITMQ_DEFAULT_PASS}
    restart: alwaysㄹ

	# mongoDB
  dev_trip_dev_mongodb_container:
    container_name: dev_trip_mongodb_container
    image: mongo
    ports:
      - ${DEV_TRIP_MONGODB_BINDING_PORT}:27017
    volumes:
      - ${DEV_TRIP_MONGODB_DATA_PATH}:/data/db
    environment:
      MONGO_INITDB_DATABASE: ${DEV_TRIP_MONGODB_DATABASE}
      MONGO_INITDB_ROOT_USERNAME: ${DEV_TRIP_MONGODB_USERNAME}
      MONGO_INITDB_ROOT_PASSWORD: ${DEV_TRIP_MONGODB_PASSWORD}
      DEV_TRIP_MONGODB_BINDING_PORT: ${DEV_TRIP_MONGODB_BINDING_PORT}
    restart: no

	# RabbitMQ
  test_trip_rabbitmq_container:
    container_name: test_trip_rabbitmq_container
    image: rabbitmq:3-management-alpine
    ports:
      - ${DEV_TRIP_RABBITMQ_PORT}:5672
      - ${DEV_TRIP_WEBSOCKET_PORT}:15672
      - ${DEV_TRIP_STOMP_PORT}:61613
    environment:
      RABBITMQ_DEFAULT_USER: ${RABBITMQ_DEFAULT_USER}
      RABBITMQ_DEFAULT_PASS: ${RABBITMQ_DEFAULT_PASS}
    restart: on-failure

```

**Back-End(Twinkle-Bank 서버 .env 파일)**

```
# MySQL
DEV_MYSQL_BINDING_PORT=MySQL포트
DEV_MYSQL_DATA_PATH=MySQL테이터저장경로
MYSQL_DATABASE=MySQL데이터베이스명
MYSQL_ROOT_HOST=MySQL호스트
MYSQL_ROOT_PASSWORD=MySQL패스워드

# Redis
DEV_REDIS_HOST=Redis호스트
DEV_REDIS_BINDING_PORT=Redis포트

# Spring
DEV_SPRING_BINDING_PORT=Spring포트
SPRING_PROFILES_ACTIVE=dev

# externals
JWT_SECRET_KEY=JWT시크릿키
```

**application-dev.yml (Twinkle Bank 서버)**

```java
spring:
  data:
    redis:
      host: j10a309a.p.ssafy.io
      port: 6379
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: ${SPRING_DATASOURCE_URL}
    username: ${SPRING_DATASOURCE_USERNAME}
    password: ${SPRING_DATASOURCE_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: update
  mvc:
    servlet:
      path: /api

```

**docker-compose-dev.yml (Twinkle Bank 서버)**

```java
version: "3"
services:

  dev_mysql_container:
    container_name: dev_mysql_container
    image: mysql:8.0
    ports:
      - ${DEV_MYSQL_BINDING_PORT}:3306
    volumes:
      - ${DEV_MYSQL_DATA_PATH}:/var/lib/mysql
    environment:
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    restart: no

  dev_redis_container:
    container_name: dev_redis_container
    image: redis:6.2.6-alpine
    ports:
      - ${DEV_REDIS_BINDING_PORT}:6379
    restart: no

  dev_spring_container:
    container_name: dev_spring_container
    image: docker-dev
    ports:
      - ${DEV_SPRING_BINDING_PORT}:8080
    build:
      context: .
      dockerfile: Dockerfile.dev
    depends_on:
      - dev_mysql_container
      - dev_redis_container
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://j10a309a.p.ssafy.io:3306/${MYSQL_DATABASE}
      SPRING_DATASOURCE_USERNAME: ${MYSQL_ROOT_HOST}
      SPRING_DATASOURCE_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      SPRING_PROFILES_ACTIVE: dev
      JWT_SECRET_KEY: ${JWT_SECRET_KEY}
    restart: always
```

**Front-end**

```python
# FE
TRIP_API_URL=https://j10a309.p.ssafy.io
TRIP_WS_URL=wss://j10a309.p.ssafy.io/ws
BANK_API_URL=https://j10a309a.p.ssafy.io
IMAGE_BASE_URL=https://triptogether.s3.ap-northeast-2.amazonaws.com
S3_ACCESS_KEY_ID=S3엑세스키
S3_ACCESS_KEY_SECRET=S3시크릿키
```

---

### 4. 배포 환경 구축 (CI)

**Jenkins build script(Trip 서버)**

```yaml
pipeline {
    agent any
    
    environment {
	    GITLAB_CREDENTIALS = 'gitlab'
	    releasePort = 8080
    }

    stages {
        stage('Git Clone') {
            steps {
                git branch: 'release',
                credentialsId: "${GITLAB_CREDENTIALS}",
                url: 'https://lab.ssafy.com/s10-bigdata-dist-sub2/S10P22A309'
            }
        }
		stage('Copy Env') {
			steps {
				sh "mkdir -p ./BE/trip-together"
				sh "cp -f ../env/.env ./BE/trip-together/.env";
			}
		}
		stage('Build Jar') {
            steps {
                dir ('BE/trip-together') {
                    sh 'chmod +x ./gradlew'
                    sh './gradlew clean bootJar'
                }
            }
        }
		stage('Make & Execute Docker Containers') {
			steps {
				dir ('BE/trip-together') {
					sh 'docker-compose -f ./docker-compose-dev.yml up -d'
				}
			}
		}
		stage('rabbitmq Stomp Setting') {
		    steps {
		        dir ('BE/trip-together') {
		            sh "docker-compose -f ./docker-compose-dev.yml exec test_trip_rabbitmq_container rabbitmq-plugins enable rabbitmq_stomp"
		        }
		    }
		}
		stage('Make & Execute Spring Containers') {
			steps {
				dir ('BE/trip-together') {
					sh 'docker-compose -f ./docker-compose-dev.yml up dev_spring_container --build -d'
				}
			}
		}
		stage('Service Check') { // 연결 체크
            steps {
                sshagent(credentials: ['ubuntu-a309']) {
                    sh '''
                        #!/bin/bash
                        
                        for retry_count in \$(seq 20)
                        do
                          if curl -s "http://j10a309.p.ssafy.io:$releasePort" > /dev/null
                          then
                              curl -d '{"text":"Release Complete"}' -H "Content-Type: application/json" -X POST https://meeting.ssafy.com/hooks/6g1qumwh38y3jb17gyasfszcqh
                              break
                          fi
                        
                          if [ $retry_count -eq 20 ]
                          then
                            curl -d '{"text":"Release Fail"}' -H "Content-Type: application/json" -X POST https://meeting.ssafy.com/hooks/6g1qumwh38y3jb17gyasfszcqh
                            exit 1
                          fi
                        
                          echo "The server is not alive yet. Retry health check in 5 seconds..."
                          sleep 5
                        done
                    '''
                }
            }
		}
    }
    
    post {
        success {
        	script {
                def Author_ID = sh(script: "git show -s --pretty=%an", returnStdout: true).trim()
                def Author_Name = sh(script: "git show -s --pretty=%ae", returnStdout: true).trim()
                mattermostSend (
	                color: 'good', 
	                message: "빌드 성공: ${env.JOB_NAME} #${env.BUILD_NUMBER} by ${Author_ID}(${Author_Name})\n(<${env.BUILD_URL}|Details>)"
                )
            }
        }
        failure {
        	script {
                def Author_ID = sh(script: "git show -s --pretty=%an", returnStdout: true).trim()
                def Author_Name = sh(script: "git show -s --pretty=%ae", returnStdout: true).trim()
                mattermostSend (
	                color: 'danger', 
	                message: "빌드 실패: ${env.JOB_NAME} #${env.BUILD_NUMBER} by ${Author_ID}(${Author_Name})\n(<${env.BUILD_URL}|Details>)"
                )
            }
        }
    }
}
```

**Jenkins build script(Twinkle-Bank 서버)**

```yaml
pipeline {
    agent any
    
    environment {
		    GITLAB_CREDENTIALS = 'gitlab'
		    releasePort = 8080
    }

    stages {
        stage('Git Clone') {
            steps {
                git branch: 'release',
                credentialsId: "${GITLAB_CREDENTIALS}",
                url: 'https://lab.ssafy.com/s10-bigdata-dist-sub2/S10P22A309'
            }
        }
				stage('Copy Env') {
						steps {
								sh "mkdir -p ./BE/twinkle-bank"
								sh "cp -f ../env/.env ./BE/twinkle-bank/.env";
						}
				}
				stage('Build Jar') {
            steps {
                dir ('BE/twinkle-bank') {
                    sh 'chmod +x ./gradlew'
                    sh './gradlew clean bootJar'
                }
            }
        }
		stage('Make & Execute Docker Containers') {
				steps {
						dir ('BE/twinkle-bank') {
								sh 'docker compose -f ./docker-compose-dev.yml up -d'
						}
				}
		}
		stage('Make & Execute Spring Containers') {
				steps {
						dir ('BE/twinkle-bank') {
								sh 'docker compose -f ./docker-compose-dev.yml up dev_spring_container --build -d'
						}
				}
		}
        stage('Service Check') { // 연결 체크
            steps {
                sshagent(credentials: ['ubuntu-a309']) {
                    sh '''
                        #!/bin/bash
                        
                        for retry_count in \$(seq 50)
                        do
                          if curl -s "http://j10a309a.p.ssafy.io:$releasePort" > /dev/null
                          then
                              curl -d '{"text":"Release Complete"}' -H "Content-Type: application/json" -X POST https://meeting.ssafy.com/hooks/6g1qumwh38y3jb17gyasfszcqh
                              break
                          fi
                        
                          if [ $retry_count -eq 50 ]
                          then
                            curl -d '{"text":"Release Fail"}' -H "Content-Type: application/json" -X POST https://meeting.ssafy.com/hooks/6g1qumwh38y3jb17gyasfszcqh
                            exit 1
                          fi
                        
                          echo "The server is not alive yet. Retry health check in 5 seconds..."
                          sleep 5
                        done
                    '''
                }
            }
        }
    }
    post {
        success {
        	script {
                def Author_ID = sh(script: "git show -s --pretty=%an", returnStdout: true).trim()
                def Author_Name = sh(script: "git show -s --pretty=%ae", returnStdout: true).trim()
                mattermostSend (
	                color: 'good', 
	                message: "빌드 성공: ${env.JOB_NAME} #${env.BUILD_NUMBER} by ${Author_ID}(${Author_Name})\n(<${env.BUILD_URL}|Details>)"
                )
            }
        }
        failure {
        	script {
                def Author_ID = sh(script: "git show -s --pretty=%an", returnStdout: true).trim()
                def Author_Name = sh(script: "git show -s --pretty=%ae", returnStdout: true).trim()
                mattermostSend (
	                color: 'danger', 
	                message: "빌드 실패: ${env.JOB_NAME} #${env.BUILD_NUMBER} by ${Author_ID}(${Author_Name})\n(<${env.BUILD_URL}|Details>)"
                )
            }
        }
    }
}
```

**Dockerfile (Trip서버, 프로젝트 최상단에 위치)**

```yaml
FROM docker
COPY --from=docker/buildx-bin:latest /buildx /usr/libexec/docker/cli-plugins/docker-buildx

FROM openjdk:17-jdk
ADD ./build/libs/trip-together-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]

```

**Dockerfile (Twinkle-Bank서버, 프로젝트 최상단에 위치)**

```yaml
FROM docker
COPY --from=docker/buildx-bin:latest /buildx /usr/libexec/docker/cli-plugins/docker-buildx

FROM openjdk:17-jdk
ADD ./build/libs/twinkle-bank-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

---

### 5. NginX(Server 자체) : /etc/nginx/nginx.conf

```bash
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
        worker_connections 768;
}

http {

        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
        keepalive_timeout 65;
        types_hash_max_size 2048;

        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3; # Dropping SSLv3, ref: POODLE
        ssl_prefer_server_ciphers on;

        access_log /var/log/nginx/access.log;
        error_log /var/log/nginx/error.log;

        gzip on;

        include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/*;
}
```

### /etc/nginx/sites-available/default

```bash
server {
	listen 80 default_server;
	listen [::]:80 default_server;
	
	root /var/www/html;

	index index.html index.htm index.nginx-debian.html;

	server_name _;

	location / {
		try_files $uri $uri/ =404;
	}

	pass PHP scripts to FastCGI server
	
	location ~ \.php$ {
	include snippets/fastcgi-php.conf;
	
	With php-fpm (or other unix sockets):
	fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
	With php-cgi (or other tcp sockets):
	fastcgi_pass 127.0.0.1:9000;
	}

	deny access to .htaccess files, if Apache's document root
	concurs with nginx's one
	
	location ~ /\.ht {
	deny all;
	}
}

Virtual Host configuration for example.com

You can move that to a different file under sites-available/ and symlink that
to sites-enabled/ to enable it.

server {
listen 80;
listen [::]:80;

server_name example.com;

root /var/www/example.com;
index index.html;

location / {
		try_files $uri $uri/ =404;
	}
}

server {

	SSL configuration
	
	listen 443 ssl default_server;
	listen [::]:443 ssl default_server;
	
	Note: You should disable gzip for SSL traffic.
	See: https://bugs.debian.org/773332
	
	Read up on ssl_ciphers to ensure a secure configuration.
	See: https://bugs.debian.org/765782
	
	Self signed certs generated by the ssl-cert package
	Don't use them in a production server!
	
	include snippets/snakeoil.conf;

	root /var/www/html;

	Add index.php to the list if you are using PHP
	index index.html index.htm index.nginx-debian.html;
    server_name j10a309.p.ssafy.io; # managed by Certbot

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}

	location /ws {
        	proxy_pass http://j10a309.p.ssafy.io:8080;
        	proxy_http_version 1.1;
        	proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection "Upgrade";
        	proxy_set_header Host $host;
	}

	location /api {
		proxy_pass http://j10a309.p.ssafy.io:8080;
	        proxy_redirect off;
	        charset utf-8;

	        proxy_set_header Host $host;
	        proxy_set_header X-Real-IP $remote_addr;
	        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	        proxy_set_header X-NginX-Proxy true;
	}
	pass PHP scripts to FastCGI server
	
	location ~ \.php$ {
	include snippets/fastcgi-php.conf;
	
	With php-fpm (or other unix sockets):
	fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
	With php-cgi (or other tcp sockets):
	fastcgi_pass 127.0.0.1:9000;
	}

	deny access to .htaccess files, if Apache's document root
	concurs with nginx's one
	
	location ~ /\.ht {
	deny all;
}

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/j10a309.p.ssafy.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/j10a309.p.ssafy.io/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = j10a309.p.ssafy.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

	listen 80 ;
	listen [::]:80 ;
    server_name j10a309.p.ssafy.io;
    return 404; # managed by Certbot

}
```