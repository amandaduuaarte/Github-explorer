import { RepositoryItem } from "./RepositoryItem";

const repository ={
  name:'unform',
  description:'Repositório em react',
  link:'http://unform/unform'
}
export function RepositoryList (){
  return (
    <section className="repository-list">
      <h1>Lista de repositórios: </h1> 
      <ul>
       <RepositoryItem repository={repository}/>
       <RepositoryItem repository={repository}/>
       <RepositoryItem repository={repository} />
       <RepositoryItem repository={repository}/>
      </ul>
    </section>
  );
}