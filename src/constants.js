import Images from './Images.js'

const scrambled_phrases = [
    'I am React Developer',
    'I am a Web Designer',
    'I am an AWS Community Builder',
    'I am a Hack Club Leader',
    'I am an Agora.io Student Ambassador',
    'I am a Technology Evangelist',
    'I am a GitKraken Ambassador',
    'I am a Research Student',
    'I am a Tech. Community Nerd',
    'I am a #MSFT Tech. Associate',
    'I am a #MSFT Certified Trainer',
    'I am a Writer',
    'I am a Illustrator',
    'I am a UI/UX Engg.'
]

const Achievements = [
    {
        title: 'Cybersecurity Essentials',
        image: Images.CyberSecurity,
    }, {
        title: 'Microsoft Certified Trainer',
        image: Images.MCT,
    }, {
        title: 'Microsoft Innovative Educator - Master Trainer 2020-2021',
        image: Images.MIEMT,
    }, {
        title: 'Microsoft Innovative Educator Expert 2020-2021',
        image: Images.MIEExpert,
    }, {
        title: 'Beta - Microsoft Learn Student Ambassador',
        image: Images.MLSABeta,
    }, {
        title: 'Data Scientist - DataCamp',
        image: Images.DSDC,
    }, {
        title: 'MTA - Network Fundamentals',
        image: Images.MTANF,
    }, {
        title: 'Microsoft Student Partner',
        image: Images.MSP,
    },{
        title: 'IBM - Tools for Data Science',
        image: Images.IBMDS,
    }, {
        title: 'MTA - Introduction to Python',
        image: Images.MTAPython,
    }, {
        title: 'Microsoft Innovative Educator - Trainer',
        image: Images.MIETrainer,
    }, {
        title: 'Microsoft Office Specialist - Word Expert',
        image: Images.MOSWordExpert,
    }, {
        title: 'Microsoft Office Specialist - Excel',
        image: Images.MOSExcel,
    }, {
        title: 'Microsoft Office Specialist - PowerPoint',
        image: Images.MOSPPT,
    }, {
        title: 'Microsoft Office Specialist - Word',
        image: Images.MOSWord,
    }
]

const constants = {
    Achievements,
    scrambled_phrases: scrambled_phrases,
}

export default constants