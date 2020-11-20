const express = require("express");
const cors = require("cors");

 const { v4: uuid, validate: isUuid, v4 } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

const getRepositoryIndexById = (response, id) => {
  const repositoryIndex = repositories.findIndex((repository) => {
    return repository.id === id;
  });

  if (repositoryIndex < 0) {
    return response.status(400).json({message: `Could not find repository with id: ${id}`})
  };

  return repositoryIndex;
}

app.get("/repositories", (request, response) => {
 return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  const {title, url, techs} = request.body;
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0
  };

  repositories.push(repository);

  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoryIndex = getRepositoryIndexById(response, id);

  const { likes } = repositories[repositoryIndex];
  const updatedRepository = {
    id,
    title,
    url,
    techs,
    likes
  };

  repositories[repositoryIndex] = updatedRepository;

  response.json(updatedRepository);

});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  
  const repositoryIndex = getRepositoryIndexById(response, id);

  repositories.splice(repositoryIndex, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  
  const repositoryIndex = getRepositoryIndexById(response, id);

  const repository = repositories[repositoryIndex];
  const { likes } = repository;

  repository.likes = likes + 1;

  response.json(repository);
  
});

module.exports = app;
