import { StyleSheet, Dimensions } from 'react-native';
import type { Color, Font } from '../../../Management/app/appApperienceManager'

const { width, height } = Dimensions.get('window');

export const createContainers = (colors: Color) => StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.Background,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    companyProfileContainer: {
        paddingHorizontal: 20
    },
    requestContainer: {
        backgroundColor: colors.Primary,
        alignSelf: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 5
    },
    requestImage: {
        width: 20,
        height: 20,
        marginLeft: 5
    },
    EventContainer: {
        paddingHorizontal: 20,
        // paddingVertical: 15,
    },
    swapItem: {
        borderRadius: 10,
        width: width - 40,
        height: 160,
    },
    ServicesContainer: {
        paddingHorizontal: 20,
        marginVertical: 30
    },
    ServicesScrollContainer: {

    },
    ServiceItemContainer: {
        height: 150,
        width: width / 3,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
    },
    QuoteContainer: {
        paddingTop: 15
    },
    QuoteHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    SelectLocationContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        // height: height - 200,
        // width: width,
    },
    locationItemContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        marginHorizontal: 5,
        marginVertical: 10
    }

})

export const createStyles = (colors: Color, font: Font) => StyleSheet.create({
    text: {
        color: colors.Text,

    },
    logotext: {
        fontSize: width * font.md,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
    },
    locationtext: {
        fontSize: width * font.md,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
    },
    companyprofileText: {
        fontSize: width * font.xs,
        // textAlign: 'center',
        marginVertical: 20,
        fontFamily: font.Primary,
        color: colors.Text,
        // width: width * 0.6,
    },
    requestButtonText: {
        fontSize: width * font.xs,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.OnPrimary,
        fontWeight: 'bold'
    },
    eventText: {
        fontSize: width * font.sm,
        // textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
        fontWeight: 'bold',
        marginVertical: 10
    },
    servicetitle: {
        fontSize: width * font.sm,
        // textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
        fontWeight: 'bold',
        marginVertical: 10
    },
    serviceitemtext: {
        fontSize: width * font.xs,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
        fontWeight: 'bold',
    },
    QuoteHeaderText: {
        fontSize: width * font.md,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,

    },
    locationslectionbuttonext: {
        fontSize: width * font.sm,
        // textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Primary,
        fontWeight: 'bold',
    }

})

