"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docSidebar":[{"type":"link","label":"Introduction to Otterize","href":"/","docId":"documentation/0-1-introduction"},{"type":"link","label":"Getting started with Otterize","href":"/documentation/0-2-getting-started","docId":"documentation/0-2-getting-started"},{"type":"category","label":"Quick tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Map your cluster","href":"/documentation/quick-tutorials/k8s-network-mapper","docId":"documentation/quick-tutorials/k8s-network-mapper"},{"type":"link","label":"Automate network policies","href":"/documentation/quick-tutorials/k8s-network-policies","docId":"documentation/quick-tutorials/k8s-network-policies"},{"type":"link","label":"Deploy mTLS between pods","href":"/documentation/quick-tutorials/k8s-kafka","docId":"documentation/quick-tutorials/k8s-kafka"},{"type":"link","label":"Deploy mTLS between pods and Kafka","href":"/documentation/quick-tutorials/k8s-kafka-mtls","docId":"documentation/quick-tutorials/k8s-kafka-mtls"}],"href":"/documentation/quick-tutorials/"},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installing Otterize in Kubernetes","href":"/documentation/guides/k8s-installation","docId":"documentation/guides/k8s-installation"},{"type":"link","label":"Mapping pod-to-pod calls in Kubernetes","href":"/documentation/guides/k8s-mapping-pod-to-pod-calls","docId":"documentation/guides/k8s-mapping-pod-to-pod-calls"},{"type":"link","label":"IBAC in Kubernetes via network policies","href":"/documentation/guides/k8s-ibac-via-network-policies","docId":"documentation/guides/k8s-ibac-via-network-policies"},{"type":"category","label":"IBAC for Kafka","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Credentials","href":"/documentation/guides/ibac-for-k8s-kafka/credentials","docId":"documentation/guides/ibac-for-k8s-kafka/credentials"}],"href":"/documentation/guides/ibac-for-k8s-kafka/"},{"type":"link","label":"Kubernetes mTLS with Otterize","href":"/documentation/guides/k8s-mtls","docId":"documentation/guides/k8s-mtls"},{"type":"link","label":"Implementing intent-based access control with Otterize","href":"/documentation/guides/implementing-ibac","docId":"documentation/guides/implementing-ibac"}],"href":"/documentation/guides/"},{"type":"category","label":"Core","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Terminology","href":"/documentation/core/terminology","docId":"documentation/core/terminology"},{"type":"link","label":"IBAC","href":"/documentation/core/intents-based-access-control","docId":"documentation/core/intents-based-access-control"},{"type":"link","label":"Services","href":"/documentation/core/services","docId":"documentation/core/services"},{"type":"link","label":"Network policies","href":"/documentation/core/network-policies","docId":"documentation/core/network-policies"},{"type":"link","label":"Service identities and credentials","href":"/documentation/core/service-identities-and-credentials","docId":"documentation/core/service-identities-and-credentials"},{"type":"link","label":"Resolving service names in Kubernetes","href":"/documentation/core/resolving-service-names","docId":"documentation/core/resolving-service-names"}]},{"type":"category","label":"Components","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Overview","href":"/documentation/components/operator","docId":"documentation/components/operator"},{"type":"link","label":"Credential operator","href":"/documentation/components/credential-operator","docId":"documentation/components/credential-operator"},{"type":"link","label":"Behavior","href":"/documentation/components/behavior","docId":"documentation/components/behavior"},{"type":"link","label":"Debugging","href":"/documentation/components/debugging","docId":"documentation/components/debugging"}]},{"type":"category","label":"Debugging","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"intro","href":"/documentation/debugging/intro","docId":"documentation/debugging/intro"}]},{"type":"link","label":"FAQ","href":"/documentation/faq","docId":"documentation/faq"}]},"docs":{"documentation/0-1-introduction":{"id":"documentation/0-1-introduction","title":"Introduction to Otterize","description":"What is Otterize","sidebar":"docSidebar"},"documentation/0-2-getting-started":{"id":"documentation/0-2-getting-started","title":"Getting started with Otterize","description":"Otterize OSS implements intent-based access control in a single Kubernetes cluster.","sidebar":"docSidebar"},"documentation/components/behavior":{"id":"documentation/components/behavior","title":"Behavior","description":"X509 credentials are generated on pod startup if it has the otterize/credentials-secret-name  annotation. The credentials are stored as a K8s secret names as the value for the annotation.","sidebar":"docSidebar"},"documentation/components/credential-operator":{"id":"documentation/components/credential-operator","title":"Credential operator","description":"The Otterize operator manages client intents and credentials provisioning.","sidebar":"docSidebar"},"documentation/components/debugging":{"id":"documentation/components/debugging","title":"Debugging","description":"Debugging flow:","sidebar":"docSidebar"},"documentation/components/operator":{"id":"documentation/components/operator","title":"Overview","description":"Otterize manages client intents and credentials provisioning with the help of multiple K8s operators.","sidebar":"docSidebar"},"documentation/core/intents-based-access-control":{"id":"documentation/core/intents-based-access-control","title":"IBAC","description":"...","sidebar":"docSidebar"},"documentation/core/network-policies":{"id":"documentation/core/network-policies","title":"Network policies","description":"What an Otterize service is.","sidebar":"docSidebar"},"documentation/core/resolving-service-names":{"id":"documentation/core/resolving-service-names","title":"Resolving service names in Kubernetes","description":"Service names and pod labels","sidebar":"docSidebar"},"documentation/core/service-identities-and-credentials":{"id":"documentation/core/service-identities-and-credentials","title":"Service identities and credentials","description":"mTLS credentials","sidebar":"docSidebar"},"documentation/core/services":{"id":"documentation/core/services","title":"Services","description":"What an Otterize service is.","sidebar":"docSidebar"},"documentation/core/terminology":{"id":"documentation/core/terminology","title":"Terminology","description":"An overview of the terminology used in Otterize OSS documentation.","sidebar":"docSidebar"},"documentation/debugging/intro":{"id":"documentation/debugging/intro","title":"intro","description":"Intro...","sidebar":"docSidebar"},"documentation/faq":{"id":"documentation/faq","title":"FAQ","description":"1. What is the difference between authorization and authentication?","sidebar":"docSidebar"},"documentation/guides/ibac-for-k8s-kafka/credentials":{"id":"documentation/guides/ibac-for-k8s-kafka/credentials","title":"Credentials","description":"The following examples reference the Kafka and client deployed in the tutorial","sidebar":"docSidebar"},"documentation/guides/ibac-for-k8s-kafka/README":{"id":"documentation/guides/ibac-for-k8s-kafka/README","title":"Intent-based access control for Kafka in Kubernetes","description":"Recap: controlling access to Kafka (incl. mTLS or tokens, users and ACLs, different ports)","sidebar":"docSidebar"},"documentation/guides/implementing-ibac":{"id":"documentation/guides/implementing-ibac","title":"Implementing intent-based access control with Otterize","description":"","sidebar":"docSidebar"},"documentation/guides/k8s-ibac-via-network-policies":{"id":"documentation/guides/k8s-ibac-via-network-policies","title":"IBAC in Kubernetes via network policies","description":"Recap: K8s network policies and CNI network plugins","sidebar":"docSidebar"},"documentation/guides/k8s-installation":{"id":"documentation/guides/k8s-installation","title":"Installing Otterize in Kubernetes","description":"Install Otterize on a Kubernetes cluster using helm.","sidebar":"docSidebar"},"documentation/guides/k8s-mapping-pod-to-pod-calls":{"id":"documentation/guides/k8s-mapping-pod-to-pod-calls","title":"Mapping pod-to-pod calls in Kubernetes","description":"How to collect call traffic","sidebar":"docSidebar"},"documentation/guides/k8s-mtls":{"id":"documentation/guides/k8s-mtls","title":"Kubernetes mTLS with Otterize","description":"","sidebar":"docSidebar"},"documentation/guides/README":{"id":"documentation/guides/README","title":"Guides","description":"These guides take you through installing and using Otterize.","sidebar":"docSidebar"},"documentation/quick-tutorials/k8s-kafka":{"id":"documentation/quick-tutorials/k8s-kafka","title":"Deploy mTLS between pods","description":"This tutorial will walk you through deploying mTLS certificates on a sample client-server deployment.","sidebar":"docSidebar"},"documentation/quick-tutorials/k8s-kafka-mtls":{"id":"documentation/quick-tutorials/k8s-kafka-mtls","title":"Deploy mTLS between pods and Kafka","description":"This tutorial will walk you through deploying mTLS certificates between a client and a Kafka cluster.","sidebar":"docSidebar"},"documentation/quick-tutorials/k8s-network-mapper":{"id":"documentation/quick-tutorials/k8s-network-mapper","title":"Map your cluster","description":"The Network Mapper allows you to map pod-to-pod traffic within your K8s cluster. This tutorial will guide you","sidebar":"docSidebar"},"documentation/quick-tutorials/k8s-network-policies":{"id":"documentation/quick-tutorials/k8s-network-policies","title":"Automate network policies","description":"Otterize automates network policies within your cluster by abstracting away","sidebar":"docSidebar"},"documentation/quick-tutorials/README":{"id":"documentation/quick-tutorials/README","title":"Quick tutorials","description":"Get to know Otterize in 5 minutes with these quick tutorials.","sidebar":"docSidebar"}}}')}}]);