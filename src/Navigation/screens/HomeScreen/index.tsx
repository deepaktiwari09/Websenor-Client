import { View, Text, Image, TouchableOpacity, ScrollView, Pressable, Dimensions } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import { createStyles, createContainers } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Management';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import * as Data from './homescreen';
import RBSheet from 'react-native-raw-bottom-sheet';

import RequestForm from '../../../Components/form';

export default function HomeScreen({ navigation, route }) {

    const { colors, fonts } = useSelector((state: RootState) => state.apperienceManager);

    const styles = useMemo(() => createStyles(colors, fonts), [colors]);
    const containers = useMemo(() => createContainers(colors), [colors]);
    const locationRef = useRef();
    const QuoteFormRef = useRef();

    const [currentlocationIndex, setcurrentlocationIndex] = useState(0);
    return (
        <ScrollView style={containers.main}>
            <View style={containers.headerContainer}>
                <Pressable onPress={() => {
                    locationRef.current?.open();
                }} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text, styles.locationtext]}>{Data.locations[currentlocationIndex]}</Text>
                    <Image source={require('../../../assets/images/downarrow.png')} style={{ width: 18, height: 18, marginLeft: 10, marginTop: 5 }} />
                </Pressable>
                <Text style={[styles.text, styles.logotext]}>Websenor</Text>
            </View>
            <View style={containers.EventContainer}>
                <Text style={styles.eventText}>Latest Events</Text>
                <SwiperFlatList
                    style={containers.swapItem}
                    data={Data.events}
                    renderItem={({ item }) => {
                        return (
                            <Image source={{ uri: item }} style={containers.swapItem} />
                        )
                    }}
                    autoplay
                    autoplayDelay={2}
                    autoplayLoop
                    showPagination
                    paginationStyle={{
                        bottom: 20,
                    }}
                    paginationStyleItem={{
                        width: 8,
                        height: 8,
                    }}


                />
            </View>
            <View style={containers.ServicesContainer}>
                <Text style={styles.servicetitle}>Our Services</Text>
                <View style={containers.ServicesScrollContainer}>
                    <ScrollView horizontal={true}>
                        {Data.services.map((item, index) => {
                            return (
                                <View key={index} style={containers.ServiceItemContainer}

                                >
                                    <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
                                    <Text style={styles.serviceitemtext}>{item.name}</Text>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
            {/* <View style={containers.VacanciesContainer}>
                <Text style={styles.servicetitle}>Job Vacancies</Text>
                <View style={containers.ServicesScrollContainer}>
                    <ScrollView horizontal={true}>
                        {Data.services.map((item, index) => {
                            return (
                                <Pressable key={index} style={containers.ServiceItemContainer}
                                    onPress={() => {
                                        serviceRef.current?.open();
                                        setServiceIndex(index);
                                    }}
                                >
                                    <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
                                    <Text style={styles.serviceitemtext}>{item.name}</Text>
                                </Pressable>
                            )
                        })}
                    </ScrollView>
                </View>
            </View> */}
            <View style={containers.companyProfileContainer}>

                <Text style={styles.companyprofileText}>
                    WebSenor – An IT company based in India, divided in USA, UK, Kuwait & India. We deliver the art services of IT & ITES to the global market and also deal in Website design & Development, Software development, Mobile Applications development, Remote Employee & Digital Marketing services.
                    The firm was established in 2010 and was revised as WebSenor in 2013. Our founder Mr Shubham Soni started this company with a strong ideology to serve the high quality services and products to SMEs.
                </Text>
                <TouchableOpacity style={containers.requestContainer} onPress={() => {
                    QuoteFormRef.current?.open();
                }}>
                    <Text style={styles.requestButtonText}>Request a quote</Text>
                    <Image source={require('../../../assets/images/RightArrow.png')} style={containers.requestImage} />
                </TouchableOpacity>
            </View>
            <RBSheet
                ref={locationRef}
                height={Dimensions.get('window').height / 2}
            >
                <ScrollView style={containers.SelectLocationContainer}>
                    <Text style={styles.eventText} >Select Location</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 40 }}>
                        {Data.locations.map((location, index) => {
                            return (
                                <Pressable key={index} onPress={() => {
                                    locationRef.current?.close();
                                    setcurrentlocationIndex(index);
                                }}
                                    style={containers.locationItemContainer}
                                >
                                    <Text style={styles.locationslectionbuttonext} >{location}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                </ScrollView>
            </RBSheet>
            <RBSheet
                ref={QuoteFormRef}
                height={Dimensions.get('window').height}
            >
                <View style={containers.QuoteContainer}>
                    <View style={containers.QuoteHeaderContainer}>
                        <Text style={styles.QuoteHeaderText}>Request a free quote</Text>
                        <Pressable onPress={() => {
                            QuoteFormRef.current?.close();
                        }}>
                            <Image source={require('../../../assets/images/close.png')} style={{ width: 25, height: 25 }} />
                            {/* <Text style={styles.eventText}>X</Text> */}
                        </Pressable>
                    </View>
                    <RequestForm />
                </View>
            </RBSheet>
        </ScrollView>
    )
}


