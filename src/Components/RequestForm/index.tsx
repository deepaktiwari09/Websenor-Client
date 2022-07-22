import { View, Text, Pressable, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useMemo, useState } from 'react';
import { createStyles, createContainers } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../Management';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DocumentPicker from 'react-native-document-picker'
import type { DocumentPickerResponse } from 'react-native-document-picker';

import LottieView from 'lottie-react-native';
import { MassageSentAnimation } from '../../assets'

const formcheckbox = ['Hire a resource / team on Remote', 'Web Design & Development', 'Mobile Application Development', 'Annual Maintenance - AMC', 'Digital Marketing', 'Ecommerce Solutions', 'SEO (Search Engine Optimisation)', 'Software Development', 'other']

type formdata = {
    name: string,
    email: string,
    phone: string,
    details: string,
    checkbox: string[],
    file: DocumentPickerResponse,
}

const inittialformdata = {
    name: '',
    email: '',
    phone: '',
    details: '',
    checkbox: [],
    file: {} as DocumentPickerResponse,
}

export default function RequestForm() {
    const { colors, fonts } = useSelector((state: RootState) => state.apperienceManager);
    const styles = useMemo(() => createStyles(colors, fonts), [colors]);
    const containers = useMemo(() => createContainers(colors), [colors]);
    const [ismassagesend, setismassagesend] = useState(false);

    const [formdata, setFormdata] = useState<formdata>(inittialformdata)
    const [error, setError] = useState('');
    return (
        <ScrollView style={containers.Form}>
            <View style={containers.TextInputContainer}>
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
            </View>
            <View>
                <Text style={styles.lable}>Services</Text>
                <Text style={styles.servicelable}>Please choose the service area you need, and submit this form and we will get back to you shortly with subject matter expert.</Text>
                <View style={containers.CheckBoxContainer}>
                    {formcheckbox.map((item, index) => {
                        return (
                            <View key={index} style={containers.CheckBox}>
                                <BouncyCheckbox
                                    fillColor={colors.Secondry}

                                    style={{ borderColor: 'blue' }}
                                    onPress={() => {
                                        const checkbox = [...formdata.checkbox];
                                        if (!formdata.checkbox.includes(item)) {
                                            checkbox.push(item);
                                            setFormdata({ ...formdata, checkbox: checkbox })
                                        } else {
                                            setFormdata({ ...formdata, checkbox: formdata.checkbox.filter(item => item !== item) })
                                        }
                                    }}
                                />
                                <Text style={styles.checkBoxText}>{item}</Text>
                            </View>
                        )
                    })}
                </View>

            </View>
            <View style={containers.projectDetailsContainer}>
                <Text style={[styles.lable]}>Project details</Text>
                <Text style={styles.servicelable}>Submit your project requirements or query. We are happy to assist you.</Text>
                <TextInput
                    style={[styles.textInput, { textAlignVertical: 'top' }]}
                    multiline={true}
                    numberOfLines={8}
                    placeholder='Minimum 50 characters long ...'
                    placeholderTextColor={'rgba(51,51,51,.4)'}
                    onChangeText={(text) => {
                        setFormdata({ ...formdata, details: text });
                    }}
                />
                <Text style={{ alignSelf: 'flex-end', fontFamily: fonts.Primary, color: colors.Text }}>{formdata.details.length}/200</Text>
            </View>
            <View style={containers.projectDetailsContainer}>
                <Text style={[styles.lable, { marginTop: 0 }]}>Upload Document</Text>
                <Text style={styles.documentlable}>You can upload your SOW, Requirements, SRS or other details if you have. If you don't have, you can leave it blank.</Text>
                <View style={containers.DocumentButtonContainer}>
                    <TouchableOpacity style={containers.chooseFileButtonContainer}
                        onPress={async () => {
                            const file = await DocumentPicker.pickSingle({
                                type: [DocumentPicker.types.doc, DocumentPicker.types.docx, DocumentPicker.types.pdf, DocumentPicker.types.pptx, DocumentPicker.types.ppt],
                                presentationStyle: 'fullScreen',
                                copyTo: 'cachesDirectory'
                            })
                            if (file) {
                                setFormdata({ ...formdata, file: file })
                            }
                        }}
                    >
                        <Text style={styles.chosenFiletext}>Choose File</Text>
                    </TouchableOpacity>
                    {formdata.file.name && <Text style={styles.selectedfiletext}>{formdata.file.name}</Text>}
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
                            else if (formdata.details.length < 49) {
                                setError('Project Detail must be 50 Character long')
                            }
                            else if (formdata.file.uri) {
                                setError('Must Select SRS file')
                            }
                            else if (formdata.name.length > 4 && formdata.email.includes('@gmail.com') && formdata.phone.length >= 10 && formdata.phone.length <= 13 && formdata.details.length > 49) {
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
                        <Text style={styles.submitButtontext}>Submit</Text>
                    </TouchableOpacity> :
                    <View style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }]}>
                        <LottieView source={MassageSentAnimation} autoPlay loop={false} style={{ width: 50, height: 50 }} />
                        <Text style={styles.chosenFiletext}>Request Recived</Text>
                    </View>
                }
            </View>
        </ScrollView>
    )
}
