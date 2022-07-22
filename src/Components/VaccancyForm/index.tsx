import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useMemo, useState, useEffect } from 'react';
import { createStyles, createContainers } from './styles';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Management';
import DocumentPicker from 'react-native-document-picker'
import type { DocumentPickerResponse } from 'react-native-document-picker';
import LottieView from 'lottie-react-native';
import { MassageSentAnimation } from '../../assets';

const inittialformdata = {
    name: '',
    email: '',
    phone: '',
    address: '',
    linkdinprofilelink: '',
    CVfile: {} as DocumentPickerResponse,
    currentCompany: '',
    additionalinfo: '',
    questions: [
        {
            question: 'Why are you applying for this position at Websenor?',
            answer: ''
        },
        {
            question: "On a scale of 1 to 10, Please tell us why you selected such a rating?",
            answer: ''
        },
        {
            question: "What is your current salary?",
            answer: ''
        },
        {
            question: 'Have you work with Websenor previously? If yes, please provide the details',
            answer: ''
        }
    ]
}


export default function VaccancyForm() {

    const { colors, fonts } = useSelector((state: RootState) => state.apperienceManager);
    const styles = useMemo(() => createStyles(colors, fonts), [colors, fonts]);
    const containers = useMemo(() => createContainers(colors), [colors]);
    const [formdata, setFormdata] = useState(inittialformdata)
    const [error, setError] = useState('');
    const [ismassagesend, setismassagesend] = useState(false);
    return (
        <ScrollView style={containers.Form}>
            <View>
                <Text style={styles.lable}>Your name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your full name here'
                    placeholderTextColor={'rgba(51,51,51,.5)'}
                    maxLength={20}
                    autoComplete={'username'}
                    autoCorrect={true}
                    onChangeText={(text) => {
                        setFormdata({ ...formdata, name: text });
                    }}

                />
                <Text style={styles.lable}>Phone Number</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='+91 XXXXXXXXXX'
                    placeholderTextColor={'rgba(51,51,51,.5)'}
                    maxLength={13}
                    keyboardType='numeric'
                    autoComplete={'tel'}
                    autoCorrect={true}
                    onChangeText={(text) => {
                        setFormdata({ ...formdata, phone: text });
                    }}
                />
                <Text style={styles.lable}>Your Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='example@gmail.com'
                    placeholderTextColor={'rgba(51,51,51,.5)'}
                    maxLength={35}
                    autoComplete={'email'}
                    onChangeText={(text) => {
                        setFormdata({ ...formdata, email: text });
                    }}
                />
                <Text style={styles.lable}>Your Address</Text>
                <TextInput
                    style={[styles.textInput, { textAlignVertical: 'top' }]}
                    placeholder='Floor, Building, Street, City, State, Country'
                    placeholderTextColor={'rgba(51,51,51,.5)'}
                    // maxLength={35}
                    multiline={true}
                    numberOfLines={4}
                    autoComplete={'postal-address'}
                    onChangeText={(text) => {
                        setFormdata({ ...formdata, address: text });
                    }}
                />
                <Text style={styles.lable}>Current Company</Text>
                <TextInput
                    style={styles.textInput}
                    // placeholder='https://www.linkedin.com/in/example-name/'
                    // placeholderTextColor={'rgba(51,51,51,.5)'}
                    // maxLength={35}
                    // autoComplete={'postal-address'}
                    onChangeText={(text) => {
                        setFormdata({ ...formdata, currentCompany: text });
                    }}
                />
                <Text style={styles.lable}>Linkdin Profile</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='https://www.linkedin.com/in/example-name/'
                    placeholderTextColor={'rgba(51,51,51,.5)'}
                    // maxLength={35}
                    // autoComplete={'postal-address'}
                    onChangeText={(text) => {
                        setFormdata({ ...formdata, linkdinprofilelink: text });
                    }}
                />
            </View>
            <View>
                <Text style={styles.lable}>Answer some Questions</Text>
                {formdata.questions.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={styles.sublable}>{item.question}</Text>
                            <TextInput
                                style={[styles.textInput, { textAlignVertical: 'top' }]}
                                // placeholder='Floor, Building, Street, City, State, Country'
                                placeholderTextColor={'rgba(51,51,51,.5)'}
                                // maxLength={35}
                                multiline={true}
                                numberOfLines={4}
                                // autoComplete={'postal-address'}
                                onChangeText={(text) => {
                                    setFormdata({
                                        ...formdata, questions: [...formdata.questions.map((item, index) => {
                                            if (index === index) {
                                                return { ...item, answer: text }
                                            }
                                            return item
                                        })]
                                    });
                                }}
                            />
                        </View>
                    )
                })}
            </View>
            <View style={containers.projectDetailsContainer}>
                <Text style={[styles.lable, { marginTop: 0 }]}>Upload Document</Text>
                <View style={containers.DocumentButtonContainer}>
                    <TouchableOpacity style={containers.chooseFileButtonContainer}
                        onPress={async () => {
                            const file = await DocumentPicker.pickSingle({
                                type: [DocumentPicker.types.doc, DocumentPicker.types.docx, DocumentPicker.types.pdf, DocumentPicker.types.pptx, DocumentPicker.types.ppt],
                                presentationStyle: 'fullScreen',
                                copyTo: 'cachesDirectory'
                            })
                            if (file) {
                                setFormdata({ ...formdata, CVfile: file })
                                // console.log(file)
                            }
                        }}
                    >
                        <Text style={styles.chosenFiletext}>Choose CV File</Text>
                    </TouchableOpacity>
                    {formdata.CVfile.name && <Text style={styles.selectedfiletext}>{formdata.CVfile.name}</Text>}
                </View>
            </View>
            {error.length > 1 && <Text style={{ textAlign: 'center', color: 'red', fontFamily: fonts.Primary, marginBottom: 10, fontWeight: 'bold' }} >{error}</Text>}
            <View style={containers.submitButtonContainer}>
                {!ismassagesend ?
                    <TouchableOpacity style={containers.submitButton}
                        onPress={() => {
                            if (formdata.name.length < 4) {
                                setError('Name is Too Short');
                            }
                            else if (formdata.phone.length > 13 || formdata.phone.length < 10 || formdata.phone.includes(' ')) {
                                setError('Phone Number is not valid')
                            }
                            else if (formdata.email.includes('@gmail.com') == false || formdata.email.includes(' ')) {
                                setError('Email is not valid')
                            }
                            else if (formdata.address.length < 20) {
                                setError('Address Detail must be 20 Character long')
                            }
                            else if (formdata.CVfile.uri == undefined) {
                                setError('Upload CV File')
                            }
                            else if (formdata.name.length > 4 && formdata.email.includes('@gmail.com') && formdata.phone.length >= 10 && formdata.phone.length <= 13 && formdata.address.length >= 20) {
                                // console.log(formdata)
                                setError('');
                                setFormdata(inittialformdata);
                                setismassagesend(true)
                            }

                            else {
                                alert('somthing wrong')
                            }
                        }}
                    >
                        <Text style={styles.submitButtontext}>Send</Text>
                    </TouchableOpacity> :
                    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                        <LottieView source={MassageSentAnimation} autoPlay loop={false} style={{ width: 50, height: 50 }} />
                        <Text style={styles.chosenFiletext}>Form Recived</Text>
                    </View>
                }
            </View>
        </ScrollView>
    )
}