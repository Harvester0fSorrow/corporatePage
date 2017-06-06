const initialStateMetaData =
{
    metaData:{
        menuOptions:[],
        selectedOption: localStorage.getItem( 'selectedOption' ) || 'Home'
    }
}
export default initialStateMetaData;
