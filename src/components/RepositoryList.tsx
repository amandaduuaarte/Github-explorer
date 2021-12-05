import {useState, useEffect} from 'react';
import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
  
export function RepositoryList (){
  const [repositories,setRepositories] = useState<Repository[]>([]);

  interface Repository {
    name: string;
    description: string;
    html_url:string;
  }

  useEffect(()=>{
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(res =>res.json())
    .then(data => setRepositories(data))
  }, [repositories]) 
  //função que quero execultar quando algo mudar no caso é a var repositories
  return (
    <section className="repository-list">
      <h1>Lista de repositórios: </h1> 
      <ul>
        {repositories.map(repository => {
          return  <RepositoryItem  key={repository.name} repository={repository}/>
        })}
      </ul>
    </section>
  );
}