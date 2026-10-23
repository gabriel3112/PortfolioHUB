// src/services/githubService.js

const GITHUB_USERNAME = 'gabriel3112';

export async function fetchRepositories() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
    if (!response.ok) throw new Error('Falha ao buscar repositórios');
    
    const repos = await response.json();
    return repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      stars: repo.stargazers_count,
      language: repo.language
    }));
  } catch (error) {
    console.error('Erro na integração com GitHub:', error);
    return [];
  }
}