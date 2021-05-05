const settings = 
[  
  {
    "name": "norwegian",
    "state": {
      "frontity": {
        "url": "https://aamodtgroup2.vercel.app",
        "title": "Aamodt Group",
        "description": "Konsulenter innen utvikling og drift"
      },
      "theme": {
        "menuUrl": "menu",
        "lang": "nb"
      }
    },
    "packages": [
      {
        "name": "@aamodtgroup/agtech",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "url": "https://backend2.aamodtgroup.com",
            "homepage": "hjem",
            "params": {
              "lang": "nb",
            },
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  },
  {
    "name": "english",
    "match": [".*localhost:3000\/en(\/.*)?$"],
    "state": {
      "frontity": {
        "url": "https://aamodtgroup2.vercel.app/en/",
        "title": "Aamodt Group",
        "description": "Consultants within development and operations"
      },
      "theme": {
        "menuUrl": "menu-en",
        "lang": "en"
      }
    },
    "packages": [
      {
        "name": "@aamodtgroup/agtech",
      },
      {
        "name": "@frontity/wp-source",
        "state": {
          "source": {
            "url": "https://backend2.aamodtgroup.com",
            "homepage": "home",
            "params": {
              "lang": "en",
            },
          }
        }
      },
      "@frontity/tiny-router",
      "@frontity/html2react"
    ]
  }
];

export default settings;