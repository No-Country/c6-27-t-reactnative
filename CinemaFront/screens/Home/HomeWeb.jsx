import { useState, useEffect } from 'react'

import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  ScrollView
} from 'react-native'

import { API_HOST, API_KEY, LANG } from '../../utils/constants'
import { getAllGenres } from '../../api/movie'

const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=1`

// Axios
import axios from 'axios'

const Home = ({ navigation, route }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [genres, setGenres] = useState([])

  //generos
  useEffect(() => {
    getAllGenres().then((response) => {
      setGenres(response.genres)
    })
  }, [])

  useEffect(() => {
    if (isLoading === true) {
      const fetchData = async () => {
        console.log('Start Fetching data...')
        try {
          const response = await axios({
            method: 'get',
            url: url
          })
          setData(response.data)
          console.log(response.data)
        } catch (error) {
          console.log(error)
        } finally {
          setIsLoading(false)
          console.log('End Fetching data...')
        }
      }
      fetchData()
    }
  }, [isLoading])

  const handleSubmit = () => {
    setIsLoading(true)
  }

  const detailMovie = (id, title) => {
    navigation.navigate('DetailMovie', { id: id, title: title })
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 24 }}> Reservar una Pelicula </Text>          
        </TouchableOpacity>   */}
        <Text style={{ padding: 20 }}> Cinema App 2022</Text>
        <ScrollView style={styles.scrollView}>
          {data.results &&
            data.results.map((item, index) => (
              <View key={index}>
                <Text> </Text>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path
                  }}
                />
                <Text style={styles.title_movie}>{item.title}</Text>
                <Text style={styles.text_genre}>{    
                        genres.map( (genre) => 
                        {
                          let included = item.genre_ids.includes(genre.id);
                          return included && genre.name + " ";
                        })
                      }
                </Text>
                <View style={styles.button_container}>
                  <TouchableOpacity
                    style={styles.button2}
                    onPress={() => detailMovie(item.id, item.title)}
                  >
                    <Text style={styles.text_button}>Ver horarios</Text>
                  </TouchableOpacity>
                </View>
                <Text> </Text>
              </View>
            ))}
        </ScrollView>
        <Text style={{ padding: 20 }}> Cinema App 2022</Text>
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
    marginHorizontal: 10
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
  },
  title_movie: {
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button2: {
    marginTop: 10,
    backgroundColor: '#000',
    borderRadius: 10,
    paddingVertical: 10
  },
  text_button: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16
  },
  text_genre: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16
  }
})

export default Home
