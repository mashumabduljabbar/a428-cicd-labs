pipeline {
    agent {
        docker {
            image 'node:16-buster-slim'
            args '-p 3001:3001'
        }
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'chown -R 114:122 "/.npm"'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh './jenkins/scripts/test.sh' 
            }
        }
    }
}
