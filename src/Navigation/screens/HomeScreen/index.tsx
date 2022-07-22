import { View, Text, Image, TouchableOpacity, ScrollView, Pressable, Dimensions } from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import { createStyles, createContainers } from './styles';


import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Management';
import { setLocation } from '../../../Management/app/applocationManager';

import { SwiperFlatList } from 'react-native-swiper-flatlist'; 9
import * as Data from './homescreen';

import RBSheet from 'react-native-raw-bottom-sheet';
import Modal from "react-native-modal";

import RequestForm from '../../../Components/RequestForm';
import VaccancyForm from '../../../Components/VaccancyForm';

const { width, height } = Dimensions.get('window');


export default function HomeScreen({ navigation, route }) {

    const { colors, fonts } = useSelector((state: RootState) => state.apperienceManager);
    const { location } = useSelector((state: RootState) => state.locationManager);
    const dispatch = useDispatch();

    const styles = useMemo(() => createStyles(colors, fonts), [colors]);
    const containers = useMemo(() => createContainers(colors), [colors]);
    const locationRef = useRef();
    const QuoteFormRef = useRef();
    const VaccancyFormRef = useRef();

    const [currentjobindex, setCurrentjobindex] = useState(0);
    const [isjobdetails, setisjobdetails] = useState(false);
    const [currentportfolioindex, setCurrentportfolioindex] = useState(0);
    const [isportfolio, setisportfolio] = useState(false);

    return (
        <ScrollView style={containers.main}>
            <View style={containers.headerContainer}>
                <Pressable onPress={() => {
                    locationRef.current?.open();
                }} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={[styles.text, styles.locationtext]}>{location}</Text>
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
                                <View key={index} style={[containers.ServiceItemContainer, { marginLeft: index == 0 ? 20 : 10 }]}

                                >
                                    <Image source={{ uri: item.image }} style={{ width: 50, height: 50, marginBottom: 20 }} />
                                    <Text style={styles.serviceitemtext}>{item.name}</Text>
                                    <TouchableOpacity style={{}}
                                        onPress={() => {
                                            // setCurrentjobindex(index);
                                            // VaccancyFormRef.current?.open();
                                            QuoteFormRef.current?.open();
                                        }}
                                    >
                                        <Text style={[styles.ApplyButtontext, { color: colors.Primary, marginTop: 5 }]}>Enquiry</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
                {/* <Text style={[styles.companyprofileText, { marginHorizontal: 20 }]}>{Data.about}</Text> */}
            </View>

            <View style={containers.companyProfileContainer}>

                <View>
                    <Text style={styles.eventText}>Our Leaders</Text>
                    <View style={containers.MemebersContainer}>
                        {Data.members.map((item, index) => {
                            return (
                                <View key={index} style={[,
                                    (index == 0 ? {
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        width: '100%',
                                        elevation: 2,
                                        backgroundColor: '#fff',
                                        paddingVertical: 15,
                                        paddingRight: 15,
                                        borderRadius: 20
                                    } : {}),
                                    (index == 1 || index == 2 ? {
                                        // flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        width: '48%',
                                        elevation: 2,
                                        backgroundColor: '#fff',
                                        paddingVertical: 15,
                                        borderRadius: 20,
                                        marginVertical: 20
                                    } : {}),
                                    (index > 2 ? {
                                        // flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        width: width / 3 - 40,
                                        elevation: 2,
                                        backgroundColor: '#fff',
                                        paddingVertical: 15,
                                        borderRadius: 10,
                                        marginVertical: 5
                                    } : {}),
                                ]}>
                                    <Image source={{ uri: item.image }} style={[containers.memberImage,
                                    (index == 0 ? {
                                        height: 100,
                                        width: 100,
                                        marginHorizontal: 10,
                                        marginVertical: 10,
                                    } : {}),
                                    (index == 1 || index == 2 ? {
                                        height: 70,
                                        width: 70,
                                        marginHorizontal: 20,
                                        marginVertical: 10,
                                    } : {}),
                                    (index > 2 ? {
                                        height: 50,
                                        width: 50,
                                        marginHorizontal: 20,
                                        marginVertical: 10,
                                        borderRadius: 10
                                    } : {}),
                                    ]} />
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[styles.membernametext,
                                        (index == 1 || index == 2 ? {
                                            fontSize: width * fonts.sm,
                                        } : {}),
                                        (index > 2 ? {
                                            fontSize: width * fonts.xs,
                                        } : {}),
                                        ]}>{item.name}</Text>
                                        <Text style={styles.memberpositiontext}>{item.position}</Text>

                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
                <Text style={styles.companyprofileText}>{Data.more}</Text>
                <TouchableOpacity style={containers.requestContainer} onPress={() => {
                    QuoteFormRef.current?.open();
                }}>
                    <Text style={styles.requestButtonText}>Request a quote</Text>
                    <Image source={require('../../../assets/images/RightArrow.png')} style={containers.requestImage} />
                </TouchableOpacity>
            </View>
            <View style={containers.JobsContainer}>
                <Text style={styles.jobtitle}>Jobs at Websenor</Text>
                <View style={containers.JobsScrollContainer}>
                    <ScrollView horizontal={true}>
                        {Data.jobs.map((item, index) => {
                            return (
                                <View key={index} style={[containers.JobsItemContainer, { marginLeft: (index === 0 ? 20 : 0) }]}
                                >
                                    <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
                                    <View>
                                        <Text style={styles.jobsitemtext}>{item.title}</Text>

                                        <Text style={styles.jobsitemtext}>{item.date}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between', paddingHorizontal: 40 }}>

                                        <TouchableOpacity style={[containers.ApplyButtonContainer, {
                                            marginRight: 15
                                        }]}
                                            onPress={() => {
                                                setCurrentjobindex(index);
                                                VaccancyFormRef.current?.open();
                                            }}
                                        >
                                            <Text style={styles.ApplyButtontext}>Apply</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{}}
                                            onPress={() => {
                                                setCurrentjobindex(index);
                                                // VaccancyFormRef.current?.open();
                                                setisjobdetails(true);
                                            }}
                                        >
                                            <Text style={[styles.ApplyButtontext, { color: colors.Primary, marginTop: 5 }]}>Details</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
            <View style={containers.PortfolioContainer}>

                <Text style={styles.servicetitle}>Our Portfolio</Text>
                <View style={containers.ServicesScrollContainer}>
                    <ScrollView horizontal={false} >
                        <View style={{ alignItems: 'center' }}>
                            {Data.portfolio.map((item, index) => {
                                return (
                                    <Pressable key={index} style={containers.PortfolioItemContainer}
                                        onPress={() => { setisportfolio(true); setCurrentportfolioindex(index); }}
                                    >
                                        <Image source={{ uri: item.images[0] }} style={containers.portfolioImages} />

                                        <View>
                                            <Text style={styles.portfolioitemtext}>{item.name}</Text>
                                        </View>

                                    </Pressable>
                                )
                            })}

                        </View>
                    </ScrollView>
                </View>
                <Modal isVisible={isportfolio}>
                    <View style={containers.PortfolioModalContainer}>
                        <SwiperFlatList
                            style={containers.portfolioModelImages}
                            data={Data.portfolio[currentportfolioindex].images}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ position: "relative" }}>
                                        <Image source={{ uri: item }} style={containers.portfolioModelImages} />
                                        <Pressable onPress={() => {
                                            setisportfolio(false);
                                        }}
                                            style={{ position: "absolute", top: 10, right: 10 }}
                                        >
                                            <Image source={require('../../../assets/images/close.png')} style={{ width: 25, height: 25 }} />
                                        </Pressable>

                                    </View>
                                )
                            }}
                            autoplay
                            autoplayDelay={2}
                            autoplayLoop

                        />
                        <View style={containers.PortfolioModaldetailsContainer}>
                            <Text style={styles.portfoliomodeltext}>{Data.portfolio[currentportfolioindex].name}</Text>
                            <Text style={styles.portfoliomodeldescription}>{Data.portfolio[currentportfolioindex].description}</Text>
                        </View>
                    </View>
                </Modal>
            </View>
            <View style={containers.FooterContainer}>
                <Text style={styles.fotterheadertext}>Websenor PVT. LTD</Text>
                <Text style={styles.fottertext}>All @copyright reserved by websenor from 1990 to 2022.</Text>
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
                                    dispatch(setLocation(location));
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
                        </Pressable>

                    </View>
                    <RequestForm />
                </View>
            </RBSheet>
            <RBSheet
                ref={VaccancyFormRef}
                height={Dimensions.get('window').height}
            >
                <View style={containers.QuoteContainer}>
                    <View style={containers.QuoteHeaderContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={{ uri: Data.jobs[currentjobindex].image }} style={{ width: 30, height: 30 }} />
                            <Text style={[styles.aaplyjobHeader, { marginLeft: 10 }]}>Vaccancy Form</Text>

                        </View>
                        <Pressable onPress={() => {
                            VaccancyFormRef.current?.close();
                        }}>
                            <Image source={require('../../../assets/images/close.png')} style={{ width: 25, height: 25 }} />
                        </Pressable>

                    </View>
                    <VaccancyForm />
                </View>
            </RBSheet>
            <Modal
                isVisible={isjobdetails}
            // hasBackdrop={true}
            >
                <View style={{ flex: 1, paddingVertical: 20 }}>
                    <View style={{ flex: 1, borderRadius: 10, backgroundColor: 'white', paddingHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20 }}>
                            <Text style={styles.JobModelHeader}>{location}</Text>
                            <Pressable onPress={() => {
                                setisjobdetails(false);
                            }}>
                                <Image source={require('../../../assets/images/close.png')} style={{ width: 25, height: 25 }} />
                            </Pressable>
                        </View>
                        <ScrollView>
                            <Text style={styles.joblabletext}>{Data.jobs[currentjobindex].title}</Text>
                            <Text style={styles.joblabletext}>Time:- {Data.jobs[currentjobindex].jobtype}</Text>
                            <Text style={styles.joblabletext}>Total Vaccancy:- {Data.jobs[currentjobindex].vaccancies}</Text>
                            <View style={{ marginVertical: 15 }}>

                                <Text style={styles.joblabletext}>Responsibilities</Text>
                                {Data.jobs[currentjobindex].Responsibilities.map((item, index) => {
                                    return (
                                        <Text style={styles.jobdetailstext} key={index}>{item}</Text>
                                    )
                                })}
                            </View>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={styles.joblabletext}>Requirements</Text>
                                {Data.jobs[currentjobindex].Requirements.map((item, index) => {
                                    return (
                                        <Text style={styles.jobdetailstext} key={index}>{item}</Text>
                                    )
                                })}
                            </View>
                            <View style={{ paddingVertical: 30 }}></View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}


