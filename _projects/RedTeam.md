---
layout: page
title: Adversarial RL with Red Team
description: Developing resilient RL agents by co-training with an adversary.
img: /assets/img/redteam/thumbnail.png # You'll need to add this image file
importance: 8
category: academic
---

## Overview

Adversarial learning techniques like Graphical Adversarial Networks have recently gained momentum and have been applied successfully for a number of machine learning tasks. This project explores adversarial reinforcement learning using a red team approach. The research focuses on developing robust RL agents by co-training them with an adversarial opponent to make it more robust to rare adversarial scenarios (i.e. sparse negative rewards) and catastrophic events.

This project demonstrate the effectiveness of this approach by applying it on two toy environments: Windy Grid World and Toy Self Driving Car

<div class="row justify-content-center mt-2">
    <div class="col-12 col-lg-10">
        <div class="pdf-container" style="position: relative; padding-bottom: 128.57%; height: 0; overflow: hidden;">
            <iframe src="https://docs.google.com/viewer?url=https://github.com/kunal10/RedTeam/raw/master/slides.pdf&embedded=true" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                    allowfullscreen>
            </iframe>
        </div>
    </div>
</div>
<br>

## Technical Details

<div class="row justify-content-center mt-4">
    <div class="col-12 col-lg-10">
        <div class="pdf-container" style="position: relative; padding-bottom: 128.57%; height: 0; overflow: hidden;">
            <iframe src="https://docs.google.com/viewer?url=https://github.com/kunal10/RedTeam/raw/master/report.pdf&embedded=true" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                    allowfullscreen>
            </iframe>
        </div>
    </div>
</div>
<br>

## Results

#### Windy Grid World

<div class="row mt-3">
    <div class="col-md-4 mt-1">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/redteam/QLearningPolicy.png' | relative_url }}" alt="QLearning Policy" title="QLearning Policy">
        <h5 class="text-center">QLearning Policy</h5>
    </div>
    <div class="col-md-4 mt-1">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/redteam/RedTeamQLearningPolicy.png' | relative_url }}" alt="Red Team QLearning Policy" title="Red Team QLearning Policy">
        <h5 class="text-center">QLearning w/ Red Team Policy</h5>
    </div>
    <div class="col-md-4 mt-1">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/redteam/RedTeamPolicy.png' | relative_url }}" alt="Red Team Policy" title="Red Team Policy">
        <h5 class="text-center">Red Team Agent Policy</h5>
    </div>
</div>
<br>

#### Toy Self Driving Car

<div class="row mt-3">
    <div class="col-md-6 mt-1">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/Py6MfNEqb_I" 
                    allowfullscreen
                    loading="lazy">
            </iframe>
        </div>
        <h5 class="text-center">Without Red Team</h5>
    </div>
    <div class="col-md-6 mt-1">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/ZTGul9r4Hvw" 
                    allowfullscreen
                    loading="lazy">
            </iframe>
        </div>
        <h5 class="text-center">With Red Team</h5>
    </div>
</div>
<br>

## Conclusion

We used adversarial RL to co-train the agent with an adversarial agent called Red Team on 2 toy environments:

- Windy grid world
- Toy self driving car

Our results demonstrate that Red Teams can be used for training **robust RL agents** for environments with **sparse negative rewards** and where **agent mistakes can be catastrophic**.

<div class="row justify-content-center">
    <div class="col-md-10">
        <blockquote class="blockquote text-center" style="border-left: 4px solidrgb(212, 139, 131); padding: 15px; background-color:rgb(2, 100, 139); border-radius: 4px; font-style: italic;">
            <p class="mb-0 text-white">"If you know the enemy and know yourself, you need not
            fear the result of a hundred battles. If you know yourself
            but not the enemy, for every victory gained you will also
            suffer a defeat. If you know neither the enemy nor yourself,
            you will succumb in every battle."</p>
            <footer class="blockquote-footer mt-2 text-white"><cite>Sun Tzu, The Art of War</cite></footer>
        </blockquote>
    </div>
</div>
<br>

## Try It Out

The source code and instructions are available on [GitHub](https://github.com/kunal10/RedTeam).
