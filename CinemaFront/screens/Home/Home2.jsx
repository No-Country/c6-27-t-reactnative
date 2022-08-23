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

// Axios
import axios from 'axios'

const { API_URL_2 } = process.env

const Home = ({ navigation, route }) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading === true) {
      const fetchData = async () => {
        console.log('Start Fetching data...')
        try {
          const response = await axios({
            method: 'get',
            url: API_URL_2
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

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>        
        {/* <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ fontSize: 24 }}> Reservar una Pelicula </Text>          
        </TouchableOpacity>   */}
        <Text style={{padding: 20}}> Cinema App 2022</Text>
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
                <Text style={styles.title}>{item.title}</Text>
                <Text> </Text>
                <Text style={{fontWeight: "bold"}}>Estreno:
                <Text style={{fontWeight: 100}}> {item.release_date}</Text></Text>
                <Text> </Text>
                <Text style={{fontWeight: "bold"}}>Descripcion:</Text>
                <Text>{item.overview}</Text>
              </View>
            ))}
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

export default Home
