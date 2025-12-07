pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'selenium-tests:latest'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/your-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }

        stage('Run Selenium Tests') {
            steps {
                script {
                    sh 'docker run --rm $DOCKER_IMAGE'
                }
            }
        }
    }

    post {
        always {
            echo 'Sending test report via email...'
            // Example: Use Jenkins Email Extension Plugin
            // mail to: 'your_email@example.com',
            //      subject: "Selenium Test Results",
            //      body: "Please find attached the test results."
        }
    }
}
