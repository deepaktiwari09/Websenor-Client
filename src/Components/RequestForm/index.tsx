import { View, Text, Pressable, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import { createStyles, createContainers } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../Management';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import DocumentPicker from 'react-native-document-picker'

import LottieView from 'lottie-react-native';
import { MassageSentAnimation } from '../../assets'

const formcheckbox = ['Hire a resource / team on Remote', 'Web Design & Development', 'Mobile Application Development', 'Annual Maintenance - AMC', 'Digital Marketing', 'Ecommerce Solutions', 'SEO (Search Engine Optimisation)', 'Software Development', 'other']

export default function RequestForm() {
    const { colors, fonts } = useSelector((state: RootState) => state.apperienceManager);
    const styles = useMemo(() => createStyles(colors, fonts), [colors]);
    const containers = useMemo(() => createContainers(colors), [colors]);
    const [selectedfilename, setSelectedfilename] = useState('');
    const [ismassagesend, setismassagesend] = useState(false);
    return (
        <ScrollView style={containers.Form}>
            <View style={containers.TextInputContainer}>
                {/* <Text style={styles.lable}>Your name</Text> */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Please fill your Full name here'
                    placeholderTextColor={'rgba(51,51,51,.5)'}

                />
                {/* <Text style={styles.lable}>Phone Number</Text> */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Phone Number'
                    placeholderTextColor={'rgba(51,51,51,.5)'}

                />
                {/* <Text style={styles.lable}>Your Email</Text> */}
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Email Address'
                    placeholderTextColor={'rgba(51,51,51,.5)'}

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
                    numberOfLines={8} />
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
                                setSelectedfilename(file.name)
                            }
                        }}
                    >
                        <Text style={styles.chosenFiletext}>Choose File</Text>
                    </TouchableOpacity>
                    <Text style={styles.selectedfiletext}>{selectedfilename}</Text>
                </View>
            </View>
            <View style={containers.submitButtonContainer}>
                {!ismassagesend ?
                    <TouchableOpacity style={containers.submitButton}
                        onPress={() => {
                            setismassagesend(true)
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
