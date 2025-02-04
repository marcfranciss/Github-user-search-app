import { useState } from "react";

const URL = "https://api.github.com/users/";

interface IQuery {
  name: string;
  login: string;
  avatar_url: string;
  created_at: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
  twitter_username: string;
  company: string;
}
const GithubUsers = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<IQuery | null>(null);
  const [errorOccured, setErrorOccured] = useState<boolean>(false);

  const handleQueryVal = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleSearch = async function getData(q: any) {
    const response = await fetch(URL + q);
    const data = await response.json();
    console.log(`data recieved is: ${JSON.stringify(data)}`);
    data.status === "404"
      ? setErrorOccured(true)
      : (setErrorOccured(false), setResult(data));
  };
  console.log(query);
  console.log(result);
  const renderValue = (value: any) =>
    value === null ? "Not available" : value;
  return (
    <div>
      <input
        onChange={handleQueryVal}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch(query);
        }}
        type='text'
        name=''
        id=''
        value={query}
        placeholder='Search Github username..'
      />
      {errorOccured && <span style={{ color: "red" }}>No results</span>}
      <button onClick={() => handleSearch(query)}>Seach</button>
      <section>
        <article>
          <h1>Github user</h1>
          <img src={renderValue(result?.avatar_url)} alt='avatar' />
          {/* user headear */}
          <div className='container'>
            <div className='wrapper'>
              <p>{renderValue(result?.name)}</p>
              <p>@{renderValue(result?.login)}</p>
            </div>
            <div className='wrapper'>
              <h3>{renderValue(result?.created_at)}</h3>
            </div>
          </div>

          {/* BIO */}
          <div className='container'>
            <p>{renderValue(result?.bio)}</p>
          </div>
          {/* Repo */}
          <div className='container'>
            <div className='wraper'>
              <h2>Repos</h2>
              <p>{renderValue(result?.public_repos)}</p>
            </div>
            <div className='wraper'>
              <h2>Followers</h2>
              <p>{renderValue(result?.followers)}</p>
            </div>
            <div className='wraper'>
              <h2>Following</h2>
              <p>{renderValue(result?.following)}</p>
            </div>
          </div>
          {/* additional details */}
          <div className='container'>
            <div className='wrapper'>
              <p>{renderValue(result?.location)}</p>
              <a href={renderValue(result?.blog)}>
                {renderValue(result?.blog)}
              </a>
            </div>
            <div className='wrapper'>
              <a
                href={renderValue("https://x.com/" + result?.twitter_username)}>
                {renderValue(result?.twitter_username)}
              </a>
              <p>{renderValue(result?.company)}</p>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default GithubUsers;
