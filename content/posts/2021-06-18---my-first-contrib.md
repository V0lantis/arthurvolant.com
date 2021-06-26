---
title: My first contribution to Open Source
date: "2021-06-18"
template: "post"
draft: false
slug: "my-first-contrib"
category: "First Post"
tags:
  - "Coming soon"
  - "First post"
  - "Web Development"
  - "Open Source"
description: "My first contribution to Open Source"
socialImage: "/media/directions-1515420.jpg"
---

Since I started developing tools and softwares, I always wanted to try contributing to the Open Source community. Open Source always had had a frightening effect on me though. From afar, reading plain source code from big library such as *ReactJs* or the *Python's source code* seemed over complicated. How those OS developers could produce and understand such dense source files of codes ? How were they able to fix bugs ? How could it be even maintainable ?

While working on some personal projects and learning more advanced python tricks, I came across [*Being a Core Developer in Python*](https://youtu.be/voXVTjwnn-U?t=968) of __Raymond Hettinger__.
The video is a python conference given in 2016. I invite you to watch it, as all __Raymond Hettinger__'s videos are really good and instructive while also being funny. In the video, __Raymond Hettinger__ says :

> It is my believe that he [__Guido Van Rossum__, creator of Python] knows less than 1% of what is going on in the Python world.
> That is my believe that he has seen less than 25% of the code in the core.

I think, I always knew this plain truth, but I never acknowledged it before. Like all mathematicians, physicists, or in a more general way, every scientists don't know everything on everything. You need to start somewhere and focus your attention on it until you reach a point you are satisfied with, and then go into an other directions. 

![Image with a lot of different poles directions](/media/directions-1515420.jpg)
*This image represents well, how I was feeling before my first contribution. Which way should I take*

At that point, I had the great luck to have a very nice teacher at my school which was used to 
Open Source contributions and which advised me to look for issues on SciPy library and use the *Label* filter on GitHub issues. 
From there and since I loved statistics, he also advised me to take a closer look to the *enhancement* and *scipy.stats* issues. 

Enhancement are usually feature requests and therefore, ask you to produce new codes and to usually look for some scientific articles. It can be a new function or even an entire new submodule, like the [qMC's submodule proposal](https://github.com/scipy/scipy/issues/9695)

After some research, I ended up on this [issue](https://github.com/scipy/scipy/issues/11014) which
is a request for the implementation of [Barnard's Test](https://en.wikipedia.org/wiki/Barnard%27s_test).
Barnard's test is an hypothesis test used in the analysis of $2 \times 2$ contingencies tables, for comparing two different populations. 

After some scientific reading, I rolled up my sleeves and wrote codes. After one week of hard work,
I decided it was the right time and the right version to proposed to SciPy, and I did my [first PR](https://github.com/scipy/scipy/pull/13441). 

I must say, I have been very nicely surprised how the comments were nice and helpful. I have heard
bad stories on toxic behaviors on other repositories and I was glad to read really nice feedbacks from
the SciPy community. I never learnt as much as I did than during pull-requests reviews.

This is my first blog post which is aimed to new open source contributors, who might be doubting their capabilities of contributing to open source projects. I encourage you to join the trend. It is great fun and a rewarding experience ! 
