import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View,ScrollView, FlatList, Image, Dimensions, SafeAreaView, Animated, StatusBar, TouchableOpacity } from "react-native";
import { getNewsMoviesApi, getAllGenres, getGenreMoviesApi, getMovieByIdApi } from '../../api/movie';
import { BASE_PATH_IMG } from "../../utils/constants";

import { LinearGradient} from "expo-linear-gradient"


const DetailMovie = ({ navigation, route }) => {
    const { id } = route.params;
    const [newMovie, setNewMovie] = useState(null);

    //peliculas
 useEffect(() => {
    getMovieByIdApi(id).then((response)=>{
        setNewMovie(response);
        });
    }, [])

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.container}>        
      {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ fontSize: 24 }}> Reservar una Pelicula </Text>          
      </TouchableOpacity>   */}
        <ScrollView style={styles.scrollView}>
        {newMovie &&
          
            <View >
              <Text> </Text>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: 'https://image.tmdb.org/t/p/w500/' + newMovie.poster_path
                }}
              />
              <Text style={styles.title}>{newMovie.title}</Text>
              <Text> </Text>
              <Text style={{fontWeight: "bold"}}>Estreno:</Text>
              <Text style={{fontWeight: "100"}}> {newMovie.release_date}</Text>
              <Text> </Text>
              <Text style={{fontWeight: "bold"}}>Descripcion:</Text>
               <Text>{newMovie.overview}</Text>
            </View>
        }
        </ScrollView>
      <Text style={{padding: 20}}> Cinema App 2022</Text>
    </SafeAreaView>
  </>
  )
}

const styles = StyleSheet.create({
    title: {    
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'center'    
    },
    tinyLogo: {
      width: 300,
      height: 300,
      alignSelf: 'center',
      borderRadius: 10
    },
    container: {
      flex: 1,
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    containerSplash: {    
      backgroundColor: '#F5FCFF',
      marginTop: 40,
      marginHorizontal: 10,
    },
    splashImage: {
      width: 100,
      height: 100,
      display: 'flex',
      aspectRatio: 1,
      resizeMode: 'contain',
      alignSelf: 'flex-start'
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'lightblue',
      padding: 12,
      borderRadius: 10
    },
    scrollView: {    
      marginHorizontal: 20
    }
  })
  

export default DetailMovie