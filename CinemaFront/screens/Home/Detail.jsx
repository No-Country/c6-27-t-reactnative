import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View,ScrollView, FlatList, Image, Dimensions, SafeAreaView, Animated, StatusBar, TouchableOpacity } from "react-native";
import { getNewsMoviesApi, getAllGenres, getGenreMoviesApi, getMovieByIdApi } from '../../api/movie';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const DetailMovie = ({ navigation, route }) => {
    const { id } = route.params;
    const [newMovie, setNewMovie] = useState(null);

    //peliculas
 useEffect(() => {
    getMovieByIdApi(id).then((response)=>{
        setNewMovie(response);
        });
    }, [])

  const detailMovie =(id, title) => {
    navigation.navigate('Schedule', { id: id, title: title })
  }

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
              <View style={styles.boxImage}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500' + newMovie.poster_path
                  }}
                />
              </View>
             
              <View style={styles.containerData}>
                <Text> </Text>
                <Text style={styles.title}>{newMovie.title}</Text>
                
                {/*<Text style={{fontWeight: "bold"}}>Estreno:</Text>
                <Text style={{fontWeight: "100"}}> {newMovie.release_date}</Text>*/}
                <Text style={{fontWeight: "bold"}}>Descripcion:</Text>
                <Text>{newMovie.overview}</Text>
                <Text><Text style={{fontWeight: "bold"}}>Estreno: </Text> {newMovie.release_date}</Text>
                <View style={styles.data}>
                    <View style={styles.dataCart}>
                      <Text style={{fontWeight: "bold"}}>Duración</Text>
                      <Text>{newMovie.runtime} minutos</Text>
                    </View>
                    <View style={styles.dataCart}>
                      <Text style={{fontWeight: "bold"}}>Tipo</Text>
                      <Text>{newMovie.genres[0].name}</Text>
                    </View>
                </View>
                  <View style={styles.button_container}>
                      <TouchableOpacity style={styles.button} onPress={()=> detailMovie(newMovie.id, newMovie.title)}>
                          <Text style={styles.text_button}>Comprar Ticket</Text>
                      </TouchableOpacity>
                  </View>
                </View>
            </View>
        }
        </ScrollView>
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
      width: '100%',
      height: '100%',
      resizeMode: "cover",
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
    },
    boxImage: {
      width: '100%',
      height: height *0.42,
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    container: {
      backgroundColor: '#fff"'
    },
    containerSplash: {    
      backgroundColor: '#F5FCFF',
      marginTop: 40,
      marginHorizontal: 10,
      height: height
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
    containerData: {    
      marginHorizontal: 20
    },
    data: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    dataCart: {
      paddingHorizontal: 30
    },
    button_container: {
      width: '70%',
      alignSelf: 'center',
      marginBottom: 10
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
  })
  

export default DetailMovie