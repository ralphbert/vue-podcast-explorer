# fe-ralph-harrer

## About the project

Foreword: I am currently working with Angular and I never used Vue in combination with TypeScript and the class syntax
before to please be patient with me ;-).

## What I did

* I created a SPA based on Vue with TypeScript. Again: this is my first time coding Vue with TS in combination with the class syntax
* I did not add any CSS frameworks
* The page is responsive
* I tried to get as creative as I can with my design skills... sorry for that :-D

## Code structure

In Angular the code is strictly structured into modules, services, components, ...

I tried to do the same with Vue.

* `layouts`: Contains all used layouts. They should be as versatile as possible
* `components`: I moved all components into that directory even tough some of them are "higher order" components (handling user input and submitting actions/start business logic)
* `mock`: Contains mock data from `part-1`
* `pages`: Contains all components used by the router
* `scss`: All shared CSS code
* `services`: All shared business logic
* `store`: The store of the application

## SCSS

* I used custom props over SCSS variables because they can be changed during runtime which is a killer feature IMO
* I also used custom properties to access them in the code for a match media listener (see `BaseLayout`)
* I added small utility classes to mimic the behavior of Tailwind/Bootstrap-utilities
* No focus was spent on browser compatibility but the page should work in all modern browsers though

## State Management

* I added state management without any focus on clean code separation. To be honest: the code looks messy as hell in there 🙈
* Because I like the concept of client side state management, so I put it into that example. I always add them to any project I start.
* In components I only use getters to access the state. So no changes are needed there if the inner structure of the state model changes.

## Data Management

* I wanted to create a Podcast feed reader demo
* Due to CORS restrictions I added those files to the application. I didn't want to write an additional proxy server to get rid of the CORS errors.
* All RSS feed files are loaded separately on purpose. This shows the reactivity of the application. If the data changes the app rerenders itself

## Other things that I want to point out

* I added a custom debounce to the filter to keep up the performance of the app when filtering the feed list
* I sometimes had a hard time when it comes to typing. At least WebStorm could not resolve types reliably.
* It was a lot of fun to take a look at Vue with classes and TS! I enjoyed it.


I wish you a lot of fun with that application!



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

