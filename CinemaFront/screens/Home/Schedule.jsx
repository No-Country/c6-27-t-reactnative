import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView,TouchableOpacity, Image, Alert, Modal, Dimensions } from "react-native"
import { getMovieByIdApi } from "../../api/movie";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const data = [
    {
        id: 1,
        section : "section 1",
        seats: [
            { 
                id: 1,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 2,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 3,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 4,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 5,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 6,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 7,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 8,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 9,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 10,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 11,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 12,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 13,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 14,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 15,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 16,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 17,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 18,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 19,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 20,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 21,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 22,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 23,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 24,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 25,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
        ]
    },
    {
        id: 2,
        section : "section 2",
        seats: [
            { 
                id: 26,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 27,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 28,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 29,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 30,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 31,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 32,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 33,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 34,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 35,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 36,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 37,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 38,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 39,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 40,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 41,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 42,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 43,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 44,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 45,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 46,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 47,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 48,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 49,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 50,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
        ]
    },
    {
        id: 3,
        section : "section 3",
        seats: [
            { 
                id: 51,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 52,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 53,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 54,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 55,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 56,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 57,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 58,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 59,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 60,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 61,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 62,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 63,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 64,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 65,
                isHidden: true,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 66,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 67,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 68,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 69,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 70,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 71,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 72,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 73,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 74,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 75,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
        ]
    },
    {
        id: 4,
        section : "section 4",
        seats: [
            { 
                id: 76,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 77,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 78,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 79,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 80,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 81,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 82,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 83,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 84,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 85,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 86,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 87,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 88,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 89,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 90,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 91,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 92,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 93,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 94,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 95,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 96,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 97,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 98,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 99,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 100,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
        ]
    },
    {
        id: 5,
        section : "section 5",
        seats: [
            { 
                id: 101,
                isHidden: false,
                isOcuppied: true,
                isSelect: false
            },
            { 
                id: 102,
                isHidden: false,
                isOcuppied: true,
                isSelect: false
            },
            { 
                id: 103,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 104,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 105,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 106,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 107,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 108,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 109,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 110,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 111,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 112,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 113,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 114,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 115,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 116,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 117,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 118,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 119,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 120,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 121,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 122,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 123,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 124,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 125,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
        ]
    },
    {
        id: 6,
        section : "section 6",
        seats: [
            { 
                id: 126,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 127,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 128,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 129,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 130,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 131,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 132,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 133,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 134,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 135,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 136,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 137,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 138,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 139,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 140,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 141,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 142,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 143,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 144,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 145,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 146,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 147,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 148,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 149,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
            { 
                id: 150,
                isHidden: false,
                isOcuppied: false,
                isSelect: false
            },
        ]
    }
]

const schedule = [
    {
        id: 1,
        type: "3D",
        hour: "18:30PM",
        isSelected: false
    },
    {
        id: 2,
        type: "2D",
        hour: "18:30PM",
        isSelected: false
    },
    {
        id: 3,
        type: "3D",
        hour: "20:30PM",
        isSelected: false
    },
    {
        id: 4,
        type: "2D",
        hour: "20:30PM",
        isSelected: false
    },
    {
        id: 5,
        type: "2D",
        hour: "21:30PM",
        isSelected: false
    }
]

const Schedule = ({ navigation, route }) => {
    const { id } = route.params;

    const [newMovie, setNewMovie] = useState(null);

    const [dataSeats, setDataSeats] = useState(data)

    const [seatsSelected, setSeatsSelected] = useState([])

    const [dataSchedule, setDataSchedule] = useState(schedule)

    const [scheduleSelect, setScheduleSelect] = useState(null)

    const [modalVisible, setModalVisible] = useState(false);

      //peliculas
 useEffect(() => {
   
    getMovieByIdApi(id).then((response)=>{
        setNewMovie(response);
        });
    }, [])


   useEffect(() => {
            
        const newData = dataSeats.map(sectionData => {
            sectionData.seats.map(seatData => {
                seatData.isSelect = false
                
                return seatData
            })
        return sectionData
        })

        setDataSeats(newData)

        const newDataShedule = dataSchedule.map(scheduleData => {
                scheduleData.isSelected = false
            return scheduleData
        })
        setDataSchedule(newDataShedule)

      }, [route]);


    const selectSeat = (section, seat) => {
        //console.log(section);
        //console.log(seat);
        //setSeatsSelected(seatsSelected.push(seat))
        const newData = dataSeats.map(sectionData => {
            if(sectionData.id === section.id){
                sectionData.seats.map(seatData => {
                    if(seatData.id === seat.id){
                        seatData.isSelect = !seatData.isSelect
                    }
                    
                    return seatData
                })
            }
            return sectionData
        })

        setDataSeats(newData)

        const seatsSelectData = seatsSelected

        const index = seatsSelectData.findIndex(element => element.id === seat.id)

        if(index !== -1){
            const newDataSeats = seatsSelectData.filter(seatData => seatData.id !== seat.id)

            setSeatsSelected(newDataSeats)
            //console.log("data",newDataSeats);
        }else{
            seatsSelectData.push(seat)
            setSeatsSelected(seatsSelectData)
        }

       

    }

    const selectSchedule = (schedule) => {
        const newData = dataSchedule.map(scheduleData => {
            if(scheduleData.id === schedule.id){
                scheduleData.isSelected = !scheduleData.isSelected
            }else{
                scheduleData.isSelected = false
            }
            return scheduleData
        })
        setDataSchedule(newData)
        setScheduleSelect(schedule)
    }

    const buyTickets = () => {
        if(scheduleSelect &&seatsSelected.length > 0){
            setModalVisible(true)
        }
        //console.log(scheduleSelect);
        //console.log(seatsSelected);
    }

    const modalBuyTicket = () => {
        console.log("Compra exitosa");
        setModalVisible(false)
    }

  return (
    <View>
         {newMovie && 
         <View style={{ backgroundColor: "#fff"}}>
            <View style={{ height: 50, marginTop: 20}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    {dataSchedule.map(scheduleData => (
                         <TouchableOpacity style={[styles.card, scheduleData.isSelected &&  styles.cardSelect]}  onPress={()=> selectSchedule( scheduleData )}>
                            <Text style={[styles.type, scheduleData.isSelected &&  styles.typeSelect,]}>{scheduleData.type}</Text>
                            <Text style={[styles.hour, scheduleData.isSelected &&  styles.hourSelect,]}>{scheduleData.hour}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <Image
                style={styles.image}
                source={{
                uri: 'https://image.tmdb.org/t/p/w500' + newMovie.poster_path
                }}
            />
            <View style={styles.seats}>

                { dataSeats.map((section) => (
                     <View style={styles.section} key={section.id}>
                        {
                            section.seats.map((seat)=>(
                                <TouchableOpacity disabled={seat.isOcuppied || seat.isHidden} style={[styles.seatUnique, seat.isHidden && styles.seatUniqueHidden, seat.isOcuppied && styles.seatUniqueOcuppied, seat.isSelect && styles.seatUniqueSelect]}
                                onPress={()=> selectSeat( section, seat )}>
                                    
                                </TouchableOpacity>
                            ))
                        }
                     </View>
                ))}
            </View>
            <View style={styles.leyend}>
                    <View style={styles.leyend_item}>
                        <View style={styles.leyend_item_circle}>
                        </View>
                        <Text>
                            Disponible
                        </Text>
                    </View>
                    <View style={styles.leyend_item}>
                        <View style={[styles.leyend_item_circle, { backgroundColor: "#000"}]}>
                        </View>
                        <Text>
                            Ocupado
                        </Text>
                    </View>
                    <View style={styles.leyend_item}>
                        <View style={[styles.leyend_item_circle, { backgroundColor: "blue"}]}>
                        </View>
                        <Text>
                            Selecccionado
                        </Text>
                    </View>
            </View>
            <View style={styles.button_container}>
                <TouchableOpacity style={styles.button} onPress={()=> buyTickets( )}>
                    <Text style={styles.text_button}>Comprar</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                {scheduleSelect && 
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Detalles de la compra</Text>
                        <View style={[styles.modalData, {height: height * 0.5}]}>
                            <Text style={styles.modalTextMovie}>{newMovie.title}</Text>
                            <ScrollView style={{ height: 100}}>
                            { seatsSelected.map(seat => (
                                
                                    <View style={styles.ticket}>
                                        <View style={styles.ticketLeft}>
                                            <Image style={styles.ticketImg} source={require('./ticket.png')} />
                                        </View>
                                        <View style={styles.ticketRight}>
                                            <Text><Text style={{fontWeight: "bold"}}>Horario: </Text> {scheduleSelect && scheduleSelect.hour}</Text>
                                            <Text><Text style={{fontWeight: "bold"}}>Tipo: </Text> {scheduleSelect && scheduleSelect.type}</Text>
                                            <Text><Text style={{fontWeight: "bold"}}>Número: </Text>{seat.id}</Text>
                                        </View>
                                    </View>
                            ))
                            }
                             </ScrollView>
                        </View>
                        <Text style={styles.modalTextMovie}>Total: {seatsSelected.length} x ${scheduleSelect.type === "2D" ? "6" : "8"} = ${seatsSelected.length * (scheduleSelect.type === "2D" ? 6 : 8)}</Text>
                        <View style={styles.button_container}>
                            <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => modalBuyTicket()}
                            >
                            <Text style={styles.text_button}>Comprar</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button_container}>
                            <TouchableOpacity
                            style={[styles.button, styles.buttonClose, styles.buttonBack]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={[styles.text_button, { color: "#000"}]}>Volver</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                }
                
            </Modal>
        </View>
         }
       
    </View>
  )
}

const styles = StyleSheet.create({
    card :{
        width: 130,
        height: 50,
        shadowColor: "#000",
        borderRadius: 15,
        borderColor: "#000",
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 5,
    },
    cardSelect: {
        backgroundColor: "blue"
    },
    typeSelect: {
        color: "#fff"
    },
    hourSelect: {
        color: "#fff"
    },
    image: {
        width: '80%',
        height:  height * 0.24,
        resizeMode: "cover",
        alignSelf: "center",
        borderRadius: 20,
        transform: [{ rotateX: '-60deg' }]
    },
    seats: {
        width: '90%',
        alignSelf: "center",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: -20
    },
    section: {
        width: '29.33%',
        margin: "2%",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    seatUnique: {
        backgroundColor: '#F0F0F0',
        width: "16%",
        margin: "2%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        height: 20
    },
    seatUniqueHidden: {
        backgroundColor: "#fff"
    },
    seatUniqueOcuppied: {
        backgroundColor: "#000"
    },
    seatUniqueSelect: {
        backgroundColor: 'blue'
    },
    number: {
        fontWeight: 'bold'
    },
    button_container: {
        width: '70%',
        alignSelf: 'center'
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
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        //marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        width: "90%",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      ticket: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "#00000025",
        borderBottomWidth: 1
      },
      ticketImg: {
        width: 40,
        height: 40
      },
      ticketRight: {
        paddingLeft: 5,
        paddingVertical: 5
      },
      modalText: {
        fontSize: 25,
        fontWeight: "bold"
      },
      modalTextMovie: {
        fontSize: 20,
        marginBottom: 20
      },
      buttonClose: {
        width: "100%"
      },
      buttonBack: {
        backgroundColor: "transparent",
        borderColor: "#000",
        borderWidth: 1,
        color: "#000"
      },
      modalData: {
        marginBottom: 20
      },
      leyend: {
        width: "80%",
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
      },
      leyend_item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginHorizontal: 10
      },
      leyend_item_circle: {
        width: 18,
        height: 18,
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        marginRight: 5
      }
})

export default Schedule
