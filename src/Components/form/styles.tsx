import { StyleSheet, Dimensions } from 'react-native';
import type { Color, Font } from '../../Management/app/appApperienceManager';

const { width, height } = Dimensions.get('window');

export const createContainers = (colors: Color) => StyleSheet.create({
    Form: {
        // flex: 1,
        paddingHorizontal: 20,
        height: height - 100,
    },
    TextInputContainer: {
        // marginVertical: 3
    },
    CheckBoxContainer: {
        width: width,
        paddingTop: 30,
    },
    CheckBox: {
        flexDirection: 'row',
        marginVertical: 5,
        width: width
    },
    projectDetailsContainer: {
        marginVertical: 20
    },
    DocumentButtonContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    },
    chooseFileButtonContainer: {
        backgroundColor: colors.Background,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'flex-start',
        borderRadius: 10,
        elevation: 3,
        borderColor: colors.Primary,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    submitButtonContainer: {
        // backgroundColor: colors.Primary,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopColor: colors.Primary,
        borderTopWidth: 1,
        borderStyle: 'solid',
        // alignSelf: 'flex-start',
        // borderRadius: 10,
        // elevation: 2,
    },
    submitButton: {
        backgroundColor: colors.Primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        // alignSelf: 'flex-start',
        borderRadius: 10,
        elevation: 2,
    }
})

export const createStyles = (colors: Color, font: Font) => StyleSheet.create({
    lable: {
        color: colors.Text,
        fontWeight: 'bold',
        marginTop: 20
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: colors.Outline,
        borderStyle: 'solid',
        paddingVertical: 10,
        paddingHorizontal: 10,
        // fontSize: font.md,
        color: 'black',
    },
    servicelable: {
        color: 'rgba(51,51,51,0.5)',
        marginTop: 20,
    },
    checkBoxText: {
        color: colors.Primary,
        width: width
        // fontSize: font.md,

    },
    documentlable: {
        color: 'rgba(51,51,51,.5)',
        marginVertical: 15
    },
    chosenFiletext: {
        color: colors.Primary,
        fontFamily: 'Roboto-Medium',
        // fontSize: width * font.md,
    },
    selectedfiletext: {
        color: colors.Primary,
        fontSize: width * font.sm,
        fontFamily: font.Primary,
        marginLeft: 10
    },
    submitButtontext: {
        color: colors.OnPrimary,
        fontSize: width * font.sm,
        fontFamily: font.Primary,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})