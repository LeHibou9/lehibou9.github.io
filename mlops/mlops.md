# MLOps

I wrote this page to summarise what I learn about MLOps (Machine Learning Operations). The main sources I'm using at the moment are:
* [DeepLearning.ai's MLOps Specialization](https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops)
* [Introducing MLOps](https://www.oreilly.com/library/view/introducing-mlops/9781492083283/)
* [ml-ops.org](https://www.ml-ops.org)

Please take a look at these sources if you want more in-depth explanations of MLOps.



## MLOps: An Introduction

### Definition
MLOps is a set of principles and guidelines to ease the machine learning life cycle management. MLOps is quite a new field and emerged in recent years from the multiplication of ML projects at a large scale in companies, as well as from the increasing criticality of ML projects in company business. This lead to the need of standardizing ML process in order to decrease risks associated to ML innovation.

### Challenges of MLOps
(TODO)

### MLOps and DevOps
As the name suggests, MLOps reproduces several concepts of DevOps, which focuses on the standardization of the software creation process. Some common grounds between MLOps and DevOps can be:
* The increased collaboration and communication between the different teams of a project.
* The end-to-end project life cycle (definition, build, test, deploy).
* The emphasis on continuous delivery (CI/CD philosophy).

There exists a main difference between MLOps and DevOps. When a software is developped and launched, the software will not change over time as the code and data it is built upon are relatively static. On the other hand, MLOps is based on data that were used to train a ML model. However, data found in production are not the same than the one the ML model faced during training and therefore, the performance of a ML model launched in production could be far worse than when it was running in development. Furthermore, data can change over time (named _concept drift_ or _model decay_), which can force teams to re-train ML models.



## MLOps Key Components

MLOps principles can be divided into several parts, representing the steps of ML projects:
1. Scoping and Data Definition
2. Modelling
3. Deployment
4. Monitoring
5. (Iteration)

### Scoping and Data Definition





