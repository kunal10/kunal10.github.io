---
layout: page
title: Video Summarization
description: Deep Learning system to generate a summary of the most vital parts of the video.
img: /assets/img/VideoSummarization/thumbnail.png
importance: 7
category: fun
---

## Overview

In this project, we built a Deep Learning based system to generate a summary of the most vital parts of the video. We use a combination of LSTM (Long Short Term Memory) and CNN (Convolutional Neural Network) to accomplish the task. The approach is motivated by the success of Sequential Determinantal Point Process (DPP) for supervised video summarization and sequence to sequence video to text (s2vt) approach.

<div class="row justify-content-center mt-2">
    <div class="col-12 col-lg-10">
        <div class="pdf-container" style="position: relative; padding-bottom: 128.57%; height: 0; overflow: hidden;">
            <iframe src="https://docs.google.com/viewer?url=https://github.com/kunal10/VideoSummarization/raw/master/Poster.pdf&embedded=true" 
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
            <iframe src="https://docs.google.com/viewer?url=https://github.com/kunal10/VideoSummarization/raw/master/Report.pdf&embedded=true" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                    allowfullscreen>
            </iframe>
        </div>
    </div>
</div>
<br>

## Results

<div class="row mt-1">
    <div class="col-md-6 mt-1">
        <h5 class="text-center">Original Video</h5>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/rk5q-3L5A80" 
                    allowfullscreen
                    loading="lazy">
            </iframe>
        </div>
    </div>
    <div class="col-md-6 mt-1">
        <h5 class="text-center">Generated Summary</h5>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/Rp_pM3Q-jRs" 
                    allowfullscreen
                    loading="lazy">
            </iframe>
        </div>
    </div>
</div>

<div class="row mt-1">
    <div class="col-md-6 mt-1">
        <h5 class="text-center">Original Video</h5>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/-Pz0LfOoBYw" 
                    allowfullscreen
                    loading="lazy">
            </iframe>
        </div>
    </div>
    <div class="col-md-6 mt-1">
        <h5 class="text-center">Generated Summary</h5>
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" 
                    src="https://www.youtube.com/embed/vUIhxMsOmYQ" 
                    allowfullscreen
                    loading="lazy">
            </iframe>
        </div>
    </div>
</div>

<style>
/* Ensure videos maintain aspect ratio on all devices */
.embed-responsive-16by9 {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
    margin-bottom: 1rem;
}

.embed-responsive-16by9::before {
    display: block;
    content: "";
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.embed-responsive-item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

/* Add some spacing between video pairs on mobile */
@media (max-width: 767.98px) {
    .mt-3 {
        margin-top: 1rem !important;
    }
    .mt-5 {
        margin-top: 2rem !important;
    }
}

/* Ensure text is centered on all devices */
.text-center {
    text-align: center;
    margin-bottom: 0.75rem;
    font-weight: 500;
}
</style>
<br>

## Conclusion

Our LSTM-based approach effectively utilizes temporal information for video summarization. While not surpassing state-of-the-art results, our model outperformed most existing techniques even with random segmentation, indicating its strong ability to predict frame importance scores. We believe better segmentation and larger datasets could lead to state-of-the-art performance.
<br><br>

## Try It Out

The source code and instructions are available on [GitHub](https://github.com/kunal10/VideoSummarization).
