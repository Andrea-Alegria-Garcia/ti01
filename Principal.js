import React, {Component} from 'react';
import {View,Text,ActivityIndicator,FlatList} from 'react-native';

class Principal extends Component{
    constructor(props){
        super(props);

        this.state={
            isLoading:true,
        }
    }// fin del constructor
    async componentDidMount(){
        try{
            const response=await fetch('https://reactnative.dev/movies.json');
            const responseJson= await response.json();

            this.setState({
                isLoading:false,
                dataSource:responseJson.movies,
            },function(){
            });
        }
        catch(error){
            console.log(error);
        }
    }//fin componentDidMount

    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex:1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            )
        }//fin if
        return(
            <View>
                <FlatList
                data={this.state.dataSource}
                renderItem={({item})=>
                <Text>{item.title},{item.releaseYear}</Text>
        }
        keyExtractor={({id},index)=>id}
        />
            </View>
        )
    }//fin render
}//fin de la clase

export default Principal;