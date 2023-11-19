#!/bin/bash

helm repo add bitnami https://charts.bitnami.com/bitnami
helm upgrade nats bitnami/nats -f ./infra/values/nats.yaml >> minikube-setup.log