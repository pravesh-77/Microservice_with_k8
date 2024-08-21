# Microservice_with_k8_GitHub_NewRelic
This Repo carries step-by-step guide for setting up and deploying a microservices application using Kubernetes, Docker Desktop, New Relic, Ubuntu, and GitHub.

Introduction
This project demonstrates how to deploy a microservices application using Kubernetes on Docker Desktop, with monitoring provided by New Relic. It is designed for use on Ubuntu and managed through GitHub.

Prerequisites
Ubuntu: Ensure you have an Ubuntu system.
Docker Desktop: Installed and running.
Minikube: Installed for managing Kubernetes locally.
New Relic Account: For monitoring your application.
Git: For version control and cloning the repository.
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/yourusername/Microservice_with_k8.git
cd Microservice_with_k8
2. Install Docker Desktop
Follow the Docker Desktop installation guide for Ubuntu if you haven't already installed it.

3. Install Minikube
Install Minikube by following the Minikube installation guide.

4. Configure Kubernetes
Start Minikube and verify the Kubernetes cluster status:

bash
Copy code
minikube start
kubectl cluster-info
5. Set Up New Relic Monitoring
Add the New Relic Helm repository:

bash
Copy code
helm repo add newrelic https://helm-charts.newrelic.com
Install New Relic with Helm:

bash
Copy code
helm install newrelic newrelic/newrelic-infrastructure --namespace newrelic --create-namespace
6. Build and Deploy Microservices
Navigate to the user-service and product-service directories and build Docker images:

bash
Copy code
cd user-service
docker build -t user-service:latest .
cd ../product-service
docker build -t product-service:latest .
Create Kubernetes deployment files and deploy your microservices to the cluster. Apply the Kubernetes configuration:

bash
Copy code
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
7. Verify Deployment
Check the status of your deployments and services:

bash
Copy code
kubectl get pods
kubectl get services
Access the services via Minikube’s IP and the exposed ports:

bash
Copy code
minikube service user-service
minikube service product-service
Usage
Instructions on how to interact with your microservices, including API endpoints, environment variables, and other configurations.

Troubleshooting
Common issues and their solutions.
