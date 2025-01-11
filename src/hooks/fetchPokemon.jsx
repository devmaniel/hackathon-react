import { useState, useEffect } from "react";
import APIFetch from "../_library/api/APIFetch";

const useFetchPokemon = (pokemonName) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await APIFetch.get(`pokemon/${pokemonName}`);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName]);

  return { data, loading, error };
};

export default useFetchPokemon;
