import {Box,Text,Button,Heading,FlatList,HStack,ArrowForwardIcon} from 'native-base';
import { useContext,useEffect } from 'react';
import {usersContext} from '../context'
import { getUsersList } from '../actions';
import { TextInput } from 'react-native';
import {useState} from 'react'  
export const Home = ({navigation})=>{
    const {state,dispatch} = useContext(usersContext);
    const [allData,setAllData]=useState([])
    const [Search,setSearch]=useState('')

    const resolve = async ()=>{
        dispatch(await getUsersList());  
        setAllData((await getUsersList()).payload) 
    }
    useEffect(()=>{
        resolve() 
    },[]) 
    const searchHandler = (text)=>{

        if(text.split('').length>2)
        {
            setAllData( state.users.list.filter(album => album.title.toLowerCase().includes(text.toLowerCase())))
        }
        else 
        {
            setAllData( state.users.list) 
        } 
        setSearch(text)

        console.log(allData.length) 


    }
    return <Box>
        <TextInput style={{padding:15, height:45, borderColor:'gray', borderWidth:1,width:'60%',marginLeft:'20%',marginTop:15, borderRadius:25}}
         placeholder='Search' value={Search} onChangeText={(text)=>{searchHandler(text)}}/>

        <Heading style={{textAlign:'center', color:'red', marginTop:10}}>
                Albums List
        </Heading> 
        <FlatList
        data={allData}
        renderItem={({item})=>{
            return (
                <Box borderBottomWidth="1" _dark={{
                    borderColor: "gray.600"
                  }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                      <HStack style={{textAlign:'center', justifyContent:'space-between',marginTop:10, display:'flex',flexWrap:'wrap', flexDirection:'row'}}>  
                            <Text>
                                  {item.id}
                            </Text>
                             <Text style={{fontSize:15}}>
                                  {item.title}
                            </Text>
                            <Text style={{fontSize:10, fontWeight:'bold'}}  onPress={()=>{navigation.navigate('Profile',{id:item.id})}} >
                                  Show details
                            </Text>
                          
                      </HStack>
                </Box>
            )
        }}
        keyExtractor={(item)=>item.id}
/>
        
    </Box>

}
