pipeline {
    agent none
    stages {
        stage('Build Project Frontend') {
            agent {
                docker {
                    image 'node:10.8.0-alpine' 
                    args '-u 0:0'
                }
            }
            steps {
                sh '''
                    cd frontend
                    npm i
                    npm run build
                    rm -rf node_modules
                '''
            }
        }
        stage('Deploy Project') {
            steps{
                sh '''
                    docker-compose up -d
                '''
            }
        }
    }
}