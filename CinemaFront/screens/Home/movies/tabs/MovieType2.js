import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView,SafeAreaView,StatusBar, Dimensions, Image, Button, ImageBackground, TouchableOpacity } from 'react-native'
import { getAllGenresApi, getUpComingMoviesApi, getGenreMoviesApi } from '../../../../api/movie';
import { BASE_PATH_IMG } from "../../../../utils/constants";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const MovieType2 = ({ navigation }) => {
  const [newMovies, setNewMovies] = useState(null);

  //peliculas
  useEffect(() => {
    getUpComingMoviesApi().then((response)=>{
           setNewMovies(response.results);
       });
   }, [])

   const detailMovie =(id, title) => {
    navigation.navigate('DetailMovie', { id: id, title: title })
  }


  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}  >
            {newMovies && (
                <View style={styles.container_movie}>
                    { newMovies.map((movie, i)=>(
                        <View style={styles.card}  key={i}>
                            <ImageBackground source={{uri: `${BASE_PATH_IMG}/w500${movie.poster_path}`}} style={styles.image} >
                                <View style={styles.card_info}>
                                    <Text style={styles.title_movie}>{movie.title}</Text>
                                    <View style={styles.button_container}>
                                        <TouchableOpacity style={styles.button} onPress={()=> detailMovie(movie.id, movie.title)}>
                                            <Text style={styles.text_button}>Comprar Ticket</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            
                            </ImageBackground>
                        </View>
                    ))}
                </View>
            )}
        </ScrollView>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff"'
  },
  card: {
      //backgroundColor: "#fff",
      //padding: 20,
      //borderRadius: 20,
      //marginBottom: 5,
      //marginHorizontal: 3,
      width: "50%",
      height: height * 0.4
  },
  title: {
      marginBottom: 15,
      marginHorizontal: 20,
      fontWeight: "bold",
      fontSize: 30,
      color: "#fff",
  },
  title_movie: {
      color: "#fff",
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  image:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'flex-end',
  },
  /*container: {
      marginTop: 70,
      width: "90%",
  },*/
  container_movie: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
  },
  card_info: {
      height: 80,
      backgroundColor: "rgba(0,0,0,0.6)",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 4
  },
  button_container: {
      width: '70%'
  },
  button: {
      backgroundColor: "#000",
      borderRadius: 5,
      paddingVertical: 2
  },
  text_button: {
      textAlign: 'center',
      color: '#fff'
  }
});

export default MovieType2