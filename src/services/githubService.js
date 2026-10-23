const GITHUB_USERNAME = 'gabriel3112'; 

export async function fetchRepositories() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
    if (!response.ok) throw new Error('Erro ao buscar repositórios');
    return await response.json();
  } catch (error) {
    console.error('Erro no servico GitHub:', error);
    return [];
  }
}