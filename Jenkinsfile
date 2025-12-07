pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Muhammad-Moiz-Latif/testing-movielyzer.git', branch: 'main'
            }
        }
        stage('Run Selenium Tests') {
            steps {
                script {
                    // Run tests in Docker container
                    sh 'docker build -t selenium-tests .'
                    sh 'docker run --rm selenium-tests'
                }
            }
        }
    }
    post {
        always {
            mail to: 'moizlatif4137@gmail.com',
                 subject: "Selenium Test Results",
                 body: "Check Jenkins console for results."
        }
    }
}
