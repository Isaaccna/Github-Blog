import { z } from "zod";
import { SearchBarContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { GithubContext } from "../../../../context/GihubContext";

const searchBarSchema = z.object({
  query: z.string()
})
type SearchBarInputs = z.infer<typeof searchBarSchema>


export function SearchBar() {

  const {fetchIssue} = useContext(GithubContext)

  const {
    register,
    handleSubmit,
   
  } = useForm<SearchBarInputs>({
    resolver: zodResolver(searchBarSchema)
   
  })
  async function handleSearchIssues(data: SearchBarInputs) {
    
await fetchIssue(data.query);

  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      handleSubmit(handleSearchIssues)();
    }
  }


  return  (
    <SearchBarContainer>
     <input 
     type="text"
     placeholder="Buscar conteúdo" 
     {...register('query')}
     onKeyDown={handleKeyDown}
     />
    </SearchBarContainer>
  )
}