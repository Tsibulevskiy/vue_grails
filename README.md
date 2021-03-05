# vue_grails  
Базовая аунтификация на Grails 4 и Vue (c использованием Vuetify)

Статический Email и password [email: '1@gmail.com', password: '123456']

## отключение CORS:
######_grails-app/conf/application.yml_
```
grails:
    cors:
        enabled: false
```
### Обьединение проектов:
1. проект Vue должен находится : _src/main/_
2. добавление подключаемого модуля Gradle Node .  (https://github.com/srs/gradle-node-plugin)  
3. добавление подключаемого модуля Gradle Node .

_build.gradle_ 
```
buildscript {
    dependencies {
        classpath "com.github.node-gradle:gradle-node-plugin:2.2.4"
    }
}
apply plugin:"com.moowork.node"
```
  настройка плагина 

_build.gradle_ 
```
node {
    version = '14.15.4'
    download = true
    nodeModulesDir = file("${System.getProperty("user.dir")}/src/main/client")
    workDir = file("${project.buildDir}/nodejs")
}
```
сборка приложения Vue
```
task initClient(type: NpmTask, dependsOn: 'npmInstall') {
    group = 'build'
    description = 'Compile client side assets for production'
    args = ['run', 'build']
}
task buildClient(dependsOn: initClient) {
    group = 'build'
    description = 'Copy client resources into server'
    doLast {
        copy {
            from "${System.getProperty("user.dir")}/src/main/client/dist/"
            into "${System.getProperty("user.dir")}/src/main/webapp/"
        }
    }
}
bootRun.dependsOn(initClient)

war.dependsOn(initClient)

clean {
    delete fileTree(dir: "src/main/webapp")
}
```