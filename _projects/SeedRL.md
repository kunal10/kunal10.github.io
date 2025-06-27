---
layout: page
title: SeedRL
description: Backend API for training agents using SEED RL.
img: assets/img/SeedRL/thumbnail.png
importance: 6
category: work
published: true
---

## Overview

Designed and implemented an API for training RL agents in SEED RL framework on Google's distributed compute clusters. This API allowed clients to spawn training jobs and receive model checkpoints via Http, gRPC or Stubby. This API enabled the success of multiple 0 to 1 projects in Google Research new products team.

After Google shut down Stadia, Product and Game Design lead left to start [ludaprojects](https://ludaprojects.com/) expanding on technology and prototypes for building [Real Time RL Agents for UGC gameplay](https://ludaprojects.substack.com/p/rtrl).

## Technical Details

### Architecture

<div class="row justify-content-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        <div class="embed-responsive embed-responsive-12by9">
            <img src="https://github.com/google-research/seed_rl/blob/master/docs/architecture.gif?raw=true" alt="SeedRL Architecture" class="img-fluid rounded">
        </div>
    </div>
</div>
<br>

### Research Paper

- [SEED RL: Scalable and Efficient Deep-RL with Accelerated Central Inference](https://arxiv.org/pdf/1910.06591)

### GitHub Repository

- [google-research/seed_rl](https://github.com/google-research/seed_rl#seed)
