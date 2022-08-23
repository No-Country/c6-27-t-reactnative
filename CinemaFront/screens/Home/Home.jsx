import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image, Dimensions, SafeAreaView, Animated, StatusBar, TouchableOpacity } from "react-native";
import { getNewsMoviesApi, getAllGenres } from '../../api/movie';
import { BASE_PATH_IMG } from "../../utils/constants";

import { LinearGradient} from "expo-linear-gradient"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ESPACIO_CONTENEDOR = width*0.7;

const ESPACIO_LATERAL = (width - ESPACIO_CONTENEDOR)/2;

const ESPACIO = 10;

const ALTURA_BACKDROP = height  * 1;

const Home = ({ navigation }) => {

  const [newMovies, setNewMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const scrollX = useRef(new Animated.Value(0)).current;
 //peliculas
 useEffect(() => {
  getNewsMoviesApi().then((response)=>{
          setNewMovies(response.results);
      });
  }, [])

  //generos
 useEffect(() => {
  getAllGenres().then((response)=>{
          setGenres(response.genres);
      });
  }, [])

  const BackDrop = ({scrollX}) => (
      <View style={[{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0}, StyleSheet.absoluteFillObject]}>
          {newMovies && (
              newMovies.map((movie, index) => {
                  const inputRange = [
                      (index - 1 )* ESPACIO_CONTENEDOR,
                      index * ESPACIO_CONTENEDOR,
                      (index + 1 )* ESPACIO_CONTENEDOR,
                  ];
      
                  const outputRange = [
                      0, 1, 0
                  ];
      
                  const opacity= scrollX.interpolate({
                      inputRange, outputRange
                  })
                  return <Animated.Image blurRadius={5} source={{uri: `${BASE_PATH_IMG}/w500${movie.poster_path}`}} key={index} style={[{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0, opacity }]}/>
              })
          )}
          <LinearGradient colors={["transparent", "white"]}
              style={{ height: ALTURA_BACKDROP, width, position: "absolute", top: 0}}/>
      </View>
  )

  const detailMovie =(id, title) => {
    navigation.navigate('DetailMovie', { id: id, title: title })
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackDrop scrollX={scrollX}/>
      <StatusBar barStyle="dark-content" />
      {/*}--<Text style={styles.title}>Cartelera</Text>*/}
      {newMovies && (
        <Animated.FlatList
        onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX }}}], 
            { useNativeDriver: true}
        )}
        data={newMovies}
        keyExtractor={(item) => item.title}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 60, paddingHorizontal: ESPACIO_LATERAL}}
        decelerationRate={0}
        snapToInterval={ESPACIO_CONTENEDOR}
        scrollEventThrottle={16}
        renderItem={({item, index})=> {

            const inputRange = [
                (index - 1 )* ESPACIO_CONTENEDOR,
                index * ESPACIO_CONTENEDOR,
                (index + 1 )* ESPACIO_CONTENEDOR,
            ];

            const outputRange = [
                0, -50, 0
            ];

            const translateY = scrollX.interpolate({
                inputRange, outputRange
            })

            const opacityRange = [
                0, 1, 0
            ];

            const opacity = scrollX.interpolate({
                inputRange, outputRange: opacityRange
            })

            const arrayGenres = [];
            if(genres){
                item.genre_ids.forEach((id)=>{
                    genres.forEach((item)=>{
                        if(id === item.id){
                            arrayGenres.push(item.name + ', ');
                        }
                    })
                })
            }

            return (
                <View style={{width: ESPACIO_CONTENEDOR, justifyContent: 'space-between'}}>
                    <Animated.View style={{ marginHorizontal: ESPACIO, padding: ESPACIO, alignItems: 'center', borderRadius:34, transform: [{ translateY}],shadowColor: "#000",
                    shadowOffset: {
                        width: 5,
                        height: 10,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,

                    elevation: 5,
                    }}>
                        <Image source={{uri: `${BASE_PATH_IMG}/w500${item.poster_path}`}} style={styles.posterImage}/>
                    </Animated.View>
                    <Animated.View style={[styles.card_info, {opacity}]}>
                            <Text style={styles.title_movie}>{item.title}</Text>
                            <Text>{arrayGenres}</Text>
                            <View style={styles.button_container}>
                                <TouchableOpacity style={styles.button} onPress={()=> detailMovie(item.id, item.title)}>
                                    <Text style={styles.text_button}>Ver horarios</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                </View>
            )
        }}
      />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
      margin: 20,
      fontWeight: "bold",
      fontSize: 30,
      color: "#fff"
  },
  container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
  },
  posterImage: {
      width: "100%",
      height: ESPACIO_CONTENEDOR * 1.2,
      resizeMode: "cover",
      borderRadius: 24,
      margin: 0,
      //marginBottom: 10,
  },
  card_info: {
      //height: 100,
      //backgroundColor: "rgba(0,0,0,0.6)",
      //borderRadius: 10,
      top: -20,
      marginBottom: 25,
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  button_container: {
      width: '70%'
  },
  button: {
      marginTop: 10,
      backgroundColor: "#000",
      borderRadius: 10,
      paddingVertical: 10
  },
  text_button: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 16
  },
  title_movie: {
      color: "#000",
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold',
  },
});

export default Home

