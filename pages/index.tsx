import Seo from 'components/seo';
import { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import styles from 'styles/home/home.module.scss';

interface Props {
  results: any[];
}

const Home: NextPage<Props> = ({results}) => {
  const [movies, setMovies] = useState([] as any[]);
  useEffect(() => {
    (async () => {
      setMovies(results)
    })()
  }, [])
  
  return <>
    <Seo title="Home" />
    Home
    {!movies && <h4>Loading...</h4>}
    { movies?.map((movie: any)=>(
      <div key={movie.id}>
        <h4>{movie.original_title}</h4>
      </div>
    ))}
  </>
}

export const getStaticProps: GetStaticProps = async () => {
  const json = await fetch('http://localhost:3000/api/movie/popular')
  const { results } = await json.json();
  return {
    props: {
      results
    },
  }
}

export default Home;
