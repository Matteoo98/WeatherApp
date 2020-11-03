import React , {useState} from 'react';
import { View, StyleSheet, Text, Modal, Button , TextInput ,TouchableWithoutFeedback , Keyboard,Dimensions} from 'react-native';
import RoundButton from '../components/RoundButton';
import { colors } from '../utils/colors';

const AddCityModal = (props) => {
    
    //state = {
      //  text:""
    //}
    const [text ,setText] = useState("");

    const handleChangedText = value => {
       setText(value)
    };
    const addCityHandler = ( ) => {
        if(text.trim()=== ""){
            alert('Scrivi qualcosa')
            return ;
        }
        props.addCity(text);
        setText("")
    }
    
        return (
        <Modal visible={props.visible} animationType={'slide'}>
            <TouchableWithoutFeedback onPress={()=>{
                Keyboard.dismiss()
            }}>
            <View style={styles.container}>
                <Text style={styles.title}>Aggiungi città</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <TextInput 
                value={text} 
                onChangeText={handleChangedText} 
                style={styles.input} 
                placeholder={'Aggiungi città'}   
                autoCorrect={false} 
                ></TextInput>
               <Button title={'Add'} onPress={addCityHandler}></Button>
                </View>
               
               <RoundButton style={styles.roundButton} onPress={props.closeModal}></RoundButton>
            </View>  
            </TouchableWithoutFeedback>    
        </Modal>
    )
}
    


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:"70%",
        borderBottomWidth:1,
        paddingVertical:15,
        paddingLeft:10,
        marginRight:5,
        borderBottomColor:colors.mainOrange,
        
    },
    title:{
        fontSize:22,
        fontWeight:'600',
        marginBottom:20,

    },
    roundButton:{
        position:'absolute',
        bottom:Dimensions.get('window').height > 600 ? 50 : 30 ,

    }

})

export default AddCityModal;