import "./style.css"

export default function SearchResults ({ results, isSearching }) {
    return (
        <div >
            {!results?.length && isSearching && <p>No existen resultados</p>}
            {results?.map((value) => {
                return (
                    <div classname="search-results-container">
                    <div key={value.id} className="search-results">
                        <p>{value.name}</p>
                        <p>{value.username}</p>
                        <p>{value.email}</p>
                    </div>
                    </div>
                );
            })}
        </div>

    )

}