# SpaceWalk

An educational web app for people to learn about our Solar System and see some cool stuff.
Our project makes use of **react-three-fiber** to show 3D models of every planet. **react-three-fiber** converts **three.js** to react based components. You can see NASA's Astronomy Picture Of the Day & latest news about NASA.

## Screenshots

### Home Page
!["Screenshot of Home Page"](https://github.com/ngunner15/SpaceWalk/blob/master/client/docs/screenshots/spacewalk_home_page.png?raw=true)

### Admin Dashboard
!["Screenshot of Admin Dashboard"](https://github.com/ngunner15/SpaceWalk/blob/master/client/docs/screenshots/spacewalk_admin_dashboard.png?raw=true)

### Admin Favorites Page
!["Screenshot of Admin Favorites Page"](https://github.com/ngunner15/SpaceWalk/blob/master/client/docs/screenshots/spacewalk_admin_fav_page.png?raw=true)

### Planet Details of Venus
!["Screenshot of Venus"](https://github.com/ngunner15/SpaceWalk/blob/master/client/docs/screenshots/spacewalk_venus.png?raw=true)

### Planet Details of Earth
!["Screenshot of Earth"](https://github.com/ngunner15/SpaceWalk/blob/master/client/docs/screenshots/spacewalk_earth.png?raw=true)

### APOD(Astronomy Picture Of Day)
!["Screenshot of Astronomy Picture Of Day"](https://github.com/ngunner15/SpaceWalk/blob/master/client/docs/screenshots/spacewalk_apod.png?raw=true)

### News
!["Screenshot of News"](https://github.com/ngunner15/SpaceWalk/blob/master/client/docs/screenshots/spacewalk_news.png?raw=true)

## Technology

Multi-page application built with modern React practices.

Front-End: HTML, CSS, React

Back-End: Node, Express, PostgreSQL

## Dependencies

- React 17.0.1 or above
- React Router
- React Three Fiber
- Axios
- Node.js
- Express

## Dev Dependencies

- Nodemon

## Setup

Install dependencies with `npm install`.

### Running Client Side Development Server

```sh
npm start
```

### Running Backend Side Development Server

```sh
npm run dev
```

### Running Database Seeds

```sh
npm run db:reset
```
### Where to get API keys

- Earth Weather
```sh
https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&APPID=EARTH_KEY
```

- APOD(Astronomy Picture Of Day)
```sh
https://api.nasa.gov/planetary/apod?api_key=NASA_KEY
```

- Planet Details
```sh
https://api.le-systeme-solaire.net/rest/bodies/mars
```

- News Component
```sh
https://newsapi.org/v2/everything?domains=nasa.gov&language=en&sortBy=publishedAt&apiKey=NEWS_KEY
```

### Project Management

We utilized SCRUM method in Trello board to keep track of all the tasks of every team member.
```sh
https://trello.com/b/kVpH5lXy/final-project-scrum
```
