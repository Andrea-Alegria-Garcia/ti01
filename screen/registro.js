import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button, Item, Label, Input,Icon } from 'native-base';

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      
      <Container>
     
        <Content padder contentContainerStyle = {misEstilos.content}>
        
          <Card>
            <CardItem header bordered>
            
              <Text style={misEstilos.textCenter}>Iniciar Sesion</Text>
            </CardItem>
            <CardItem >
              <Body>
                <Text>
                  Registrar con...
                </Text>
              <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'user-circle-o' ></Icon>
              <Input placeholder= "Nombre:" />
              <Item></Item>
              <Text>o</Text>
            </Item>
            <Item textCenter>
              <Icon type = 'FontAwesome' name = 'facebook'></Icon>
              <Icon type = 'FontAwesome' name = 'instagram'></Icon>
              <Icon type = 'FontAwesome' name = 'google'></Icon>
            </Item>
            <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'user-circle-o'></Icon>
              <Input placeholder= "Apellido:" />
            </Item>
            <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'comment'></Icon>
              <Input placeholder= "Email:" />
            </Item>
            <Item inlineLabel last>
              <Icon type = 'FontAwesome' name = 'lock'></Icon>
              <Input placeholder="contraseña" />
            </Item>
            <Text>
                  ¿Ya tienes una cuenta?
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style ={misEstilos.boton}><Text>Registrar</Text></Button>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}
const misEstilos=StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'yellow'
},
  textCenter:{
    textAlign: 'center',
    whith: "100%",
  },
  boton:{
    marginLeft: "60%"
  },
});
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];




