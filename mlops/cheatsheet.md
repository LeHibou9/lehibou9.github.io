# MLOps Cheat Sheet

## Source

This cheat sheet is heavily based on the wonderful course "Machine Learning Engineering for Production (MLOps) Specialization" on Coursera.

## Structure

- Scoping
  - Define project
  - Decide key metrics
    - Accuracy
    - Latency
    - Throughput
  - Estimate resources and timeline
- Data
  - Define data
  - Establish baseline
  - Label and organize data
    - Is data labeled consistently?
- Modelling
  - Select and train model
  - Perform error analysis
- Deployment
  - Structure
    - Deploy in production
    - Monitor and maintain system
  - Key Challenges
    - Concept Drift (when X -> Y changes)
    - Data Drift (when X changes)
  - Degrees of automation
    - Human only
    - Shadow mode
    - AI assistance
    - Partial automation
    - Full automation
  - Monitoring dashboard
    - Brainstorm things that could go wrong and statistics/metrics that could detect the problems.
    - 



## Deployment and Monitoring

### Key Challenges

- Concept Drift (when X -> Y changes)
- Data Drift (when X changes)


### Software Engineering Issues

#### Checklist

- Realtime vs. Batch
- Cloud vs. Edge/Browser
- Compute resources (CPU/GPU/Memory)
- Latency, Throughput (QPS)
- Logging
- Security and Privacy


### Deployment Patterns

#### Key Ideas

- Gradual ramp up with monitoring
- Rollback

#### Common Deployment Cases

- New product/capability
- Automate/assist with manual task
- Replace previous ML system

#### Deployment Patterns

- Shadow mode: ML system shadows the humand and runs in parallel. ML system's output not used for any decisions during this phase.
- Canary development: Roll out to small fraction (for instance 5%) of traffic initially. Monitor system and ramp up traffic gradually.
- Blue green development: Router dispatching input. Easy way to enable rollback.

#### Degrees of Automation

1. Human only
2. Shadow mode
3. AI assistance
4. Partial automation
5. Full automation



### Monitoring Dashboard

- Brainstorm the things that could go wrong.
- Brainstorm few statistics/metrics that could detect the problems.
- Best idea is to use as many metrics as you can think of and then reduce their number over time.

### Examples of metrics to track

#### Software Metrics

- Memory
- Compute
- Latency
- Throughput
- Server load

#### Input Metrics (x)

- Average Input Length
- Average Input Volume
- Number of Missing Values
- Average Image Brightness
- ...

#### Output Metrics (y)

- Number of times return " "/(null)
- Number of times user redoes search
- Number of times user switches to typing
- CTR (Click-Through Rate)































