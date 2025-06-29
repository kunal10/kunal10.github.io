---
layout: page
title: Visual Diary
description: A visual diary of user's daily activities through location-aware analysis of geo-tagged video streams.
img: assets/img/VisualDiary/thumbnail.png
importance: 9
category: academic
published: true
---

## Overview

Created an application that generates a visual diary by analyzing and categorizing a user's daily activities through location-aware analysis of geo-tagged video streams.

One day is equal to 2592000 video frames at 30 fps. We need to identify a very small fraction of these frames which correspond to key activities.

Key contributions of this work are following:

- Developed android application to collect geo tagged video data.
- Used pre trained CNN to identify salient images in video.
- Explored improvement in summarization of video with GPS.
- Defined a new evaluation metric to quantify fair representation of user activities.
- Created a user interface to generate the visual summary of data.

## Technical Details

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://docs.google.com/presentation/d/1W6Ts4-fqv4U77-QCjglwhzIv6ugQnKCIFity9Poh3YM/embed?start=false&loop=false&delayms=0" frameborder="0" width="100%" height="100%" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</div>
<br>

## Results

<div class="row justify-content-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/VisualDiary/results.png' | relative_url }}" alt="Visual Diary Results" title="Visual Diary Results"/>
    </div>
</div>

This graph shows results on the real data that we collected. X axis represents time and Y axis represents difference in feature vectors. The red dots signify change points. The blue lines are the GPS intervals.

The graph in a) over represents the 3rd interval while the representation is fair when using our technique as shown in b).

## Resources

- Source code and instructions available on [GitHub](https://github.com/saharshoza/VisualDiary/tree/master/code)
