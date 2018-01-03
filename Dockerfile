# 使用DaoCloud的Ubuntu镜像
FROM daocloud.io/library/ubuntu:14.04

# 设置镜像作者
MAINTAINER Wangyg <wyg569983202@qq.com>

# 设置时区
RUN sudo sh -c "echo 'Asia/Shanghai' > /etc/timezone" && \
    sudo dpkg-reconfigure -f noninteractive tzdata

# 使用阿里云的Ubuntu镜像
RUN echo '\n\
deb http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse\n\
deb http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse\n\
deb http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse\n\
deb http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse\n\
deb http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse\n\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty main restricted universe multiverse\n\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-security main restricted universe multiverse\n\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-updates main restricted universe multiverse\n\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-proposed main restricted universe multiverse\n\
deb-src http://mirrors.aliyun.com/ubuntu/ trusty-backports main restricted universe multiverse\n'\
> /etc/apt/sources.list

# 安装wget
RUN sudo apt-get update 
RUN sudo apt-get install -y wget
RUN sudo apt-get install xz-utils
RUN sudo apt-get install build-essential -y


# WORKDIR切换目录，相当于cd的作用
WORKDIR /usr/local
# 安装Node.js v8.8.1
RUN wget https://npm.taobao.org/mirrors/node/v8.8.1/node-v8.8.1-linux-x64.tar.xz 
RUN tar -Jxv -f node-v8.8.1-linux-x64.tar.xz
RUN rm node-v8.8.1-linux-x64.tar.xz
RUN ln -s /usr/local/node-v8.8.1-linux-x64/bin/node /usr/local/bin/node
RUN ln -s /usr/local/node-v8.8.1-linux-x64/bin/npm /usr/local/bin/npm

# 安装mysql
RUN apt-get install -y mysql-server-5.6
RUN /etc/init.d/mysql start &&\
mysql -e "grant all privileges on *.* to 'root'@'%' identified by 'root';"&&\
mysql -e "grant all privileges on *.* to 'root'@'localhost' identified by 'root';"&&\
mysql -u root -proot -e "create database virus_source_app;"

# 安装redis v4.0.2
RUN wget http://download.redis.io/releases/redis-4.0.2.tar.gz 
RUN tar xzf redis-4.0.2.tar.gz
RUN rm redis-4.0.2.tar.gz
WORKDIR redis-4.0.2
RUN make
RUN ln -s  /usr/local/redis-4.0.2/src/redis-server  /usr/local/bin/redis-server
 
# 把主机上的代码目录挂载到容器中的/code/virus_source目录下
RUN mkdir -p /code/virus_source

# 替换使用淘宝的npm镜像
WORKDIR /code/virus_source
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN ln -s  /usr/local/node-v8.8.1-linux-x64/bin/cnpm  /usr/local/bin/cnpm

# container内部服务开启的端口。主机上要用还得在启动container时，做host-container的端口映射
EXPOSE 8088

ENV NODE_ENV development

#启动mysql和redis
ENTRYPOINT [“dockerShell.sh”]
