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
        paddingHorizontal: 20,
        marginVertical: 12
    },
    requestContainer: {
        backgroundColor: colors.Secondry,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
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
        // paddingLeft: 20,
        marginTop: 30
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
        justifyContent: 'flex-end',
        paddingVertical: 20,
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
    },
    JobsContainer: {
        // paddingLeft: 20,
        marginTop: 30
    },
    JobsScrollContainer: {
        // paddingLeft: 20
    },
    JobsItemContainer: {
        height: 200,
        width: width / 2,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 15,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 30,
    },
    ApplyButtonContainer: {
        backgroundColor: colors.Primary,
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 10,
        flexDirection: 'row',
        elevation: 3,
        marginTop: 10

    },
    MemebersContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    memberitemContainer: {
        // height: 50,
        // width: 50,
        // borderRadius: 25,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    memberImage: {
        elevation: 4,
        width: 50,
        borderRadius: 25,
        height: 50,
    },
    PortfolioContainer: {
        marginTop: 30,
    },
    PortfolioItemContainer: {
        height: 250,
        width: width - 40,
        backgroundColor: 'white',
        elevation: 3,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 10,
    },
    portfolioImages: {
        width: width - 40,
        height: 200
    },
    PortfolioModalContainer: {
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 20
    },
    portfolioModelImages: {
        width: width - 40,
        height: 200,
        borderRadius: 20
    },
    PortfolioModaldetailsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    FooterContainer: {
        marginTop: 10,
        marginBottom: 40,
        // borderTopColor: 'rgba(51,51,51,.3)',
        // borderTopWidth: 1,
        // borderStyle: 'solid',
        paddingVertical: 30,
        paddingHorizontal: 20
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
        color: colors.Secondry,
        fontWeight: 'bold'
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
        marginVertical: 10,
        marginLeft: 20
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
        fontSize: width * 0.037,
        // textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
        fontWeight: 'bold',
    },
    jobtitle: {
        fontSize: width * font.sm,
        // textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
        fontWeight: 'bold',
        marginVertical: 10,
        marginHorizontal: 20
    },
    jobsitemtext: {
        fontSize: width * font.xs,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.Text,
        fontWeight: 'bold',
    },
    ApplyButtontext: {
        fontSize: width * font.xs,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.OnPrimary,
    },
    vaccancytext: {
        fontSize: width * font.xs,
        textAlign: 'center',
        fontFamily: font.Primary,
        color: colors.OnPrimary,
        fontWeight: 'bold',
    },
    joblabletext: {
        color: colors.Text,
        fontSize: width * (font.xs + 0.008),
        fontFamily: font.Primary,
        fontWeight: 'bold',
    },
    jobdetailstext: {
        color: colors.Text,
        fontSize: width * font.xs,
        fontFamily: font.Primary,

        // textAlign: 'center',
    },
    JobModelHeader: {
        color: colors.Secondry,
        fontFamily: font.Primary, fontSize: width * font.md,
        fontWeight: 'bold',
    },
    aaplyjobHeader: {
        color: colors.Text,
        fontFamily: font.Primary, fontSize: width * font.md,
        fontWeight: 'bold',
    },
    membernametext: {
        fontSize: width * font.md,
        textAlign: 'center',
        color: colors.Text,
        fontFamily: font.Primary,
        // fontWeight: 'bold',
    },
    memberpositiontext: {
        fontSize: width * font.xs,
        textAlign: 'center',
        color: colors.Text,
        fontFamily: font.Primary,
        fontWeight: 'bold',
    },
    portfolioitemtext: {
        fontFamily: font.Primary,
        fontSize: width * font.sm,
        color: colors.Text,
        fontWeight: 'bold',
    },
    portfoliomodeltext: {
        fontFamily: font.Primary,
        fontSize: width * font.md,
        color: colors.Text,
        fontWeight: 'bold',
    },
    portfoliomodeldescription: {
        fontFamily: font.Primary,
        fontSize: width * (font.xs + 0.005),
        color: colors.Text,
        marginVertical: 10
        // fontWeight: 'bold',
    },
    fotterheadertext: {
        fontSize: width * font.md,
        // textAlign: 'center',
        color: 'rgba(51,51,51,.5)',
        fontFamily: font.Primary,
        fontWeight: 'bold',
    },
    fottertext: {
        fontSize: width * font.xs,
        // textAlign: 'center',
        color: 'rgba(51,51,51,.5)',
        fontFamily: font.Primary,
        // fontWeight: 'bold',
    }
})

