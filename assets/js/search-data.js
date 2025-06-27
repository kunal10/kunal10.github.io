// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A curated collection of my creative and technical projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "My research publications in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-learnlm",
          title: 'LearnLM',
          description: "AI model specifically designed and fine-tuned for educational purposes.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LearnLM/";
            },},{id: "projects-learning-coach",
          title: 'Learning Coach',
          description: "Personalized tutoring agent to enhance the learning experience.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LearningCoach/";
            },},{id: "projects-openstax",
          title: 'OpenStax',
          description: "Tap into knowledge from trusted OpenStax textbooks in Gemini.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/OpenStax/";
            },},{id: "projects-recipes-search",
          title: 'Recipes Search',
          description: "Personalized recipe recommendations on Google Search",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RecipeRecommendations/";
            },},{id: "projects-adversarial-rl-with-red-team",
          title: 'Adversarial RL with Red Team',
          description: "Developing resilient RL agents by co-training with an adversary.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RedTeam/";
            },},{id: "projects-video-summarization",
          title: 'Video Summarization',
          description: "Deep Learning system to generate a summary of the most vital parts of the video.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VideoSummarization/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%75%6E%61%6C%6C%61%64%34%32%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kunal10", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kunallad", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/kunallad423", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3N4bVMsAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
