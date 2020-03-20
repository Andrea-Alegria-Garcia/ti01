import React, { Component } from "react";
import {Container,Content,Card,CardItem,Body,Text,Button,Item,Input,Icon}
from 'native-base';

import {StyleSheet} from 'react-native';
import api from '../Mysql/api';

class Registro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            user:'',
            pass:''
        }
    }

    register = () => api.registerData(this.state.email, this.state.pass)
    render(){
        const navegar = this.props.navigation;
        return(
            <Container>
                <Content padder contentContainerStyle = {misEstilos.content}>
                    <Card>
                        <CardItem header bordered>
                        <Text style = {misEstilos.textCenter}>
                        {this.props.route.params.titulo}
                        </Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body style = {misEstilos.body}>
                                <Item inlineLabel>
                                    <Icon type = 'FontAwesome' name = 'envelope'></Icon>
                                    <Input placeholder = 'Correo electronico'
                                    onChangeText = {(email) => this.setState({email})}/>
                                </Item>
                                <Item inlineLabel>
                                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                                    <Input placeholder = 'Nombre de usuario'
                                    onChangeText = {(pass) =>this.setState({user})}/>
                                </Item>
                                <Item inlineLabel last>
                                    <Icon type = 'FontAwesome' name ='lock'></Icon>
                                    <Input placeholder = 'Contraeña'
                                    onChangeText = {(pass) => this.setState({pass})}/>
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem footer bordered>
                            <Button primary onPress={() => navegar.navigate('Login')}><Text>Login</Text></Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
};

const misEstilos = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
    },
    textCenter:{
        textAlign:'center',
        width:'100%',
    },
    boton:{
        paddingVertical:30,
    }
});

export default Registro;