import React, {useRef , useState} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import {FontAwesome5 , Feather, MaterialIcons} from '@expo/vector-icons';

const Page = ({series , movies}) =>{
  const serieList = series.series;
  const movieList = movies.movies;
  console.log('movies: ' , movieList);

  const [background, setBackground] = useState(
    { 
      uri:  serieList ? serieList.poster : null,
      name: serieList ? serieList.title : null,
      stat: serieList ? serieList.year : null,
      desc: serieList ? serieList.sinopsis : null, 
    }
  );


  const carouselRef = useRef(null);
  const {width , height} = Dimensions.get('window');
  const renderItem = ({item , index}) =>{
    return(

      <View>
        <TouchableOpacity
          onPress={() =>{
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.poster,
              name: item.title,
              stat: item.year,
              desc: item.sinopsis
            })
          }}
        >
          <Image source={{uri: item.poster}} style={styles.carouselImage}/>
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons name="library-add" size={30} color="white" style={styles.carouselIcon} />
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <ScrollView style={{backgroundColor: '#000'}}>
      <View style={styles.carouselContentContainer}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: "#000"}}>
          <ImageBackground
            source={{uri: background.uri}} // poster url
            style={styles.ImageBg}
            blurRadius={10}
          >
            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="search ..."
                placeholderTextColor="#666"
                style={styles.SearchBox}
              />
              <Feather name="search" size={22} color="#666" style={styles.searchBoxIcon}/>
            </View>

            <Text style={{color: "white", fontSize: 24, fontWeight: "bold",marginLeft: 10,marginVertical: 10}}>
            Ultimas Series
            </Text>
            <View style={styles.carouselContainerView}>
              <Carousel style={styles.Carousel}
                data={serieList} // gallery data
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                separatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              />
            </View>

            <View style={styles.movieInfoContainer}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5 name='play' size={22} color='#02ad94'
                  style={{marginLeft: 4}}
                />
              </TouchableOpacity>
            </View>

            <View 
              style={{paddingHorizontal: 14 , marginTop: 14}}
            >
              <Text style={{color: 'white' , opacity: 0.8, lineHeight: 20}}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={{marginHorizontal: 14}}>
        <Text 
          style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24}}
        >Episodios Recientes</Text>
        <ImageBackground
          source={{uri: 'https://pedropolis.tv/wp-content/uploads/2020/05/zxyNUFn22jOc2ckYbkuEQsDG7c3-300x170.jpg'}}
          style={{height: 250, width: '100%', backgroundColor: '#00'}}
          resizeMode='cover'
        />
      </View>

      <View 
        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36}}
      >
        <Text style={{color: 'white', fontSize: 24 , fontWeight: 'bold'}}>Lista De Series</Text>
        <Text style={{color: 'white', fontSize: 14 , fontWeight: 'normal'}}>ver más</Text>
      </View>

  
      <FlatList
        style={{marginBottom: 3}}
        data={serieList}
        horizontal={true}
        renderItem={({item}) =>{
          return(
            <TouchableOpacity style={{marginRight: 20}}>
              <Image source={{uri: item.poster}} style={{height: 300, width: 200}}/>
              <View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8}}>
              </View>
              <FontAwesome5 name='play' size={38} color='#fff'
                style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9}} 
              />
            </TouchableOpacity>
          )
      }}
    />


    <View 
      style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36}}
    >
      <Text style={{color: 'white', fontSize: 24 , fontWeight: 'bold'}}>Lista De Películas</Text>
      <Text style={{color: 'white', fontSize: 14 , fontWeight: 'normal'}}>ver más</Text>
    </View>

    <FlatList
      style={{marginBottom: 3}}
      data={movieList}
      horizontal={true}
      renderItem={({item}) =>{
        return(
          <TouchableOpacity style={{marginRight: 20}}>
            <Image source={{uri: item.poster}} style={{height: 300, width: 200}}/>
            <View style={{position: 'absolute', height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8}}>
            </View>
            <FontAwesome5 name='play' size={38} color='#fff'
              style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9}} 
            />
          </TouchableOpacity>
        )
      }}
    />

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContentContainer:{
    flex: 1,
    backgroundColor: '#000',
    height: 720,
    paddingHorizontal: 14
  },
  ImageBg:{
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: 'flex-start'
  },
  searchBoxContainer:{
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  SearchBox:{
    padding: 12,
    paddingLeft: 20,
    fontSize: 16
  },
  searchBoxIcon:{
    position: 'absolute',
    right: 20,
    top: 14
  }, 
  carouselContainerView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Carousel:{
    flex: 1,
    overflow: 'visible'
  },
  carouselImage:{
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  carouselText:{
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position: 'absolute',
    top: 15,
    right: 15
  },
  movieInfoContainer:{
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },
  movieName:{
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },
  movieStat:{
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    opacity: 0.8
  },
  playIconContainer:{
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(2,173,148,0.2)',
    marginBottom: 14,
  }
});

export default Page;