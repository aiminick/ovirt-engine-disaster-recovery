# README -  oVirt Engine Disaster Recovery #

This is a web application that uses Java, oVirt API and PostgreSQL to perform the task needed to for oVirt's Disaster Recovery. 



## Assumptions ##

* Every master Storage domain for each Data Center has been replicated from site A to site B.
* There is an exact copy of the RHEV-M/Engine available to run on site B, in case of DR.  
* Please refer to next section. 
 

## How does this work ? ##

* This project try to implement Approach #2, presented on this slides DevConf.cz - 2014 [Disaster Recovery Strategies Using oVirt's new Storage Connection Management Features](http://www.slideshare.net/AllonMureinik/dev-conf-ovirt-dr)
* It uses 100% API

## Installation Guide ##

### Requirements

* RHV/oVirt 3.6.10 | RHV/oVirt 4.1
* Centos/RHEL 7.x -> latest version __(minimal installation)__
* Java Oracle 8, *needs testing with OpenJDK*
* MariaDB/MySQL 5.x (for storing application configuration and parameters) 
* Play Framework 1.4, *we need some help freeing the app, from this framework, we needed to deliver the app fast for a customer, so we used this framework.* [Play Framework](https://www.playframework.com/download)

### Preparing OS 

* Always update your OS packages, then install required. 

```
yum update -y 
```
* Installing Java Oracle 1.8 

For RHEL 7.x

```
subscription-manager repos --enable rhel-7-server-thirdparty-oracle-java-rpms ; \
yum install java-1.8.0-oracle -y
```

For Centos 7.x

Download from: [Java 1.8 Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 

```
yum localinstall jre-8u91-linux-x64.rpm -y
```

Verify Java version

```
[root@localhost ~]# java -version
java version "1.8.0_XX"
Java(TM) SE Runtime Environment (build 1.8.0_XX)
Java HotSpot(TM) 64-Bit Server VM (build XX, mixed mode)
```

Open port TCP 9000

```
firewall-cmd --add-port=9000/tcp --permanent
systemctl restart firewalld

```

### Installing oVirt Engine Disaster Recovery from RPM

* Download YUM REPO

```
cd /etc/yum.repos.d/
curl -O http://supp01.i-t-m.com/.repo

```
This is a temporal repository and can/will be changed in the future !

* Install RPMs

```
yum install -y ovirt-engine-disaster-recovery-app
```  

### Configure Database

* Start/Enable MariaDB

```
systemctl enable mariadb
systemctl start mariadb
```

* MariaDB Secure Installation

```
mysql_secure_installation
```
* Create DB

```
mysqladmin create ovirtenginedr -p
```

* Import Initial DB
  * from RPM
  ```
  mysql -u root -p ovirtenginedr < /usr/share/doc/ovirt-engine-disaster-recovery-${VERSION}-${RELEASE}/ovirt-engine-disaster-recovery.sql
  ```
  * from SOURCE
  ```
  mysql -u root -p ovirtenginedr < ~/ovirt-engine-disaster-recovery/docs/ovirt-engine-disaster-recovery.sql
  ```

* Create DB User

```
mysql -u root -p

MariaDB [(none)]> CREATE USER 'ovirtdr'@'localhost' IDENTIFIED BY 'YOURPASSWOR-HERE';
MariaDB [(none)]> GRANT ALL PRIVILEGES ON ovirtenginedr.* TO 'ovirtdr'@'localhost';

```

## Application Configuration

* Configure Database Parameters

Edit configuration file: __/etc/ovirt-engine-disaster-recovery/ovirt-engine-disaster-recovery.conf__

```
# Change Values on Line 91 for MariaDB

90 # To connect to a local MySQL5 database, use:
91 db=mysql://ovirtdr:YOURPASSWOR-HERE@localhost:3306/ovirtenginedr


```

# Service Administration

## Systemctl Administration

* Start

```
systemctl start ovirt-engine-disaster-recovery

```

* Status

```
systemctl status ovirt-engine-disaster-recovery

```

* Stop

```
systemctl stop ovirt-engine-disaster-recovery

```


## LOG FILE
```
/var/log/ovirt-engine-disaster-recovery/application.log
```

You should monitor this file, for Java exceptions or SQL errors.

One common error is supplying wrong credentials to MariaDB.

### Installing oVirt Engine Disaster Recovery from SOURCE
* Build Deps
  * wget
  * git
  * unzip
  * bower
  * epel-release
  * mariadb-server

* Install Deps

```
sudo yum install wget -y
sudo yum install git -y
sudo yum install unzip -y
sudo yum install epel-release -y
sudo yum install npm -y
sudo yum install mariadb-server -y
```
* Install bower
```
npm install bower
```

* Install Java 8
```
wget --no-cookies \
--no-check-certificate \
--header "Cookie: oraclelicense=accept-securebackup-cookie" \
"http://download.oracle.com/otn-pub/java/jdk/8u101-b13/jdk-8u101-linux-x64.rpm" \
-O jdk-8u101-linux-x64.rpm

sudo rpm -Uvh jdk-8u101-linux-x64.rpm
```

* Download Play Framework
```
wget https://downloads.typesafe.com/play/1.4.2/play-1.4.2.zip
```

* Unzip Play Framework
```
unzip play-1.4.2.zip
```

* Clone REPO
```
git clone https://github.com/xandradx/ovirt-engine-disaster-recovery.git
```

* Log configuration
```
sed -i 's/^log4j.appender.Rolling.File=.*/log4j.appender.Rolling.File=\/var\/log\/ovirt-engine-disaster-recovery\/application.log/g' ~/ovirt-engine-disaster-recovery/conf/log4j.properties
sudo mkdir /var/log/ovirt-engine-disaster-recovery/
sudo chown $USER:$USER /var/log/ovirt-engine-disaster-recovery/
```

* Install patternfly

```
cd ~/ovirt-engine-disaster-recovery/
~/node_modules/bower/bin/bower install
```

* Install dependencies Java ( Play Framework )
```
cd ~
~/play-1.4.2/play deps ovirt-engine-disaster-recovery
```

* Add firewall rule
```
sudo firewall-cmd --add-port=9000/tcp
sudo firewall-cmd --add-port=9000/tcp --permanent
```

* [Configure Database]
[Configure Database]: https://github.com/xandradx/ovirt-engine-disaster-recovery#configure-database

* Create Symbolic Link for configuration
```
sudo mkdir /etc/ovirt-engine-disaster-recovery
sudo ln -s ~/ovirt-engine-disaster-recovery/conf/application.conf /etc/ovirt-engine-disaster-recovery/ovirt-engine-disaster-recovery.conf
```
  * [Configure App]
  [Configure App]: https://github.com/xandradx/ovirt-engine-disaster-recovery#application-configuration

* Starting Service
```
~/play-1.4.2/play start ovirt-engine-disaster-recovery
```

## Next Step

* [Administration Guide](https://docs.google.com/document/d/1THvgPaQk_GvbqbvtTXCaw816DgcBHmhBctGwoJBJ7xk/pub)
* [Spanish Videos](https://www.youtube.com/watch?v=ef_ZmgixzJM&list=PLgtS4_6D5_KUQGnLpaTVZkHJScKcLUZoX&index=2)
* [English Videos](coming soon)

## Who do I talk to? ##

* [Chocomango](http://chocomango.net) - José Eduardo Andrade Escobar <jandrad@chocomando.net> 
* [ITM](http://itm.gt) - Jorge Luis Andrade Escobar <jandrade@itm.gt> (yes, we are brothers)
