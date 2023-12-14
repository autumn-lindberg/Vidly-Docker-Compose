# Vidly Project

A web-based video rental service.

<img src="movie-posters.jpg" alt="movie posters" height="200px">

## Summary

### Project is split into four parts:

- Vidly-Frontend (React)
- Vidly-Backend (Node)
- Vidly-Docker-Compose (Root)
- Mongo-Seed (Seed Data)

Each part has its own repo, the whole project can be started by running `docker-compose up` while inside the `Vidly-Docker-Compose` folder ([Docker Desktop](https://www.docker.com/products/docker-desktop/) must be installed and running)

### Key Features:

- Inventory Management
- Product Management
- Customer Management
- Rental Management

## To Run The App Without Docker

Open `Vidly-Backend/config/default.json` and change `DB-connection-string` to `http://localhost:3001/api`

**Windows**

```bash
.\run
```

**Linux/Mac**

_coming soon..._

## Where to Find this App

[Vidly App](http://localhost:3000)

## Task List

- [x] Get routes and pages up and running
- [x] Write a backend
- [x] Write frontend implementation
- [ ] Use Kubernetes for eventual scaling
- [ ] Change to work on GCP Buckets/CDN
- [ ] Create a site for customers to use?

---

_See other repos' **Readme.md** for more info_
