import React, { useCallback, useState, useEffect } from "react";
import { FlatList, ActivityIndicator, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../../components/MovieCard";
import { Container, Header, Title } from "./styles";
import { getTopRated } from "../../services/tmdb";

export default function HomeScreen({ navigation }: any) {
  const [movies, setMovies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const load = useCallback(async (p = 1, replace = false) => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await getTopRated(p);
      const data = response.data;

      setTotalPages(data.total_pages);
      setMovies((prev) => (replace ? data.results : [...prev, ...data.results]));
      setPage(p);
    } catch (e) {
      console.warn(e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [loading]);

  useEffect(() => {
    load(1, true);
  }, []);

  const handleEndReached = () => {
    if (totalPages && page >= totalPages) return;
    load(page + 1);
  };

  const onRefresh = () => {
    setRefreshing(true);
    load(1, true);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }} edges={["top", "bottom"]}>
      <Container>
        <Header>
          <Title>🎬 Filmes Mais Bem Avaliados</Title>
        </Header>

        <FlatList
          data={movies}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MovieCard
              movie={item}
              onPress={() => navigation.navigate("Movie", { id: item.id })}
            />
          )}
          onEndReached={handleEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator color="#E50914" style={{ marginVertical: 20 }} /> : null
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#E50914" />
          }
        />
      </Container>
    </SafeAreaView>
  );
}
