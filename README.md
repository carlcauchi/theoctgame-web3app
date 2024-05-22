# theoctgame-web3app
The OCT Game - Web3 App

## Prerequisites

- AWS account
- Docker Hub account
- GitHub account
- ECR Repo

## Setup Instructions

### EKS Cluster and Network Setup

1. Create the Network Setup via the terraform IaC repo.
2. Create an EKS Cluster.
3. Create a new Node Group with at least one Node.
4. Create an ECR Repo for the `web3app` images.

Refer to the IaC repo: https://github.com/carlcauchi/theoctgame-iac

### Dockerfile

1. Use the Dockerfile under the `Docker` root directory to build and create a runtime image for this App.

### Add necessary secrets to your GitHub repository settings:

1. Create an AWS Access Key ID and setup a Github Secret: `AWS_ACCESS_KEY_ID`
2. Create an AWS Secret Access Key setup a Github Secret: `AWS_SECRET_ACCESS_KEY`

### Build and Deploy

1. Build your application by merging your changes to the `main` branch.
2. Manually trigger the GitHub Action `Deployment` Job to trigger and build and deploy the latest image to Kubernetes.
3. You will see the assigned Loadbalancer Endpoint under the `Deploy to EKS` task, for example:

`web3app      LoadBalancer   172.20.217.11   a77d52bbab87b42098870c136e512066-74bf7299ec4bd5b4.elb.eu-central-1.amazonaws.com   80:31221/TCP   107m`

   In this case the Loadbalancer endpoint would be `http://a77d52bbab87b42098870c136e512066-74bf7299ec4bd5b4.elb.eu-central-1.amazonaws.com`
