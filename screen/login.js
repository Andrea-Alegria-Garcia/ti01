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
              <Text style={misEstilos.textCenter}>                Iniciar sesion</Text>
            </CardItem>
            <CardItem >
              <Body>
              <Text>
                  Iniciar con...
                </Text>
                
               <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'facebook'></Icon>
              <Icon type = 'FontAwesome' name = 'instagram'></Icon>
              <Icon type = 'FontAwesome' name = 'google'></Icon>
            </Item>
                <Text textCenter>        o</Text>
              <Item inlineLabel>
              <Icon type = 'FontAwesome' name = 'user'></Icon>
              <Input placeholder= "Nombre o correo" />
            </Item>
            <Item inlineLabel last>
              <Icon type = 'FontAwesome' name = 'lock'></Icon>
              <Input placeholder="Contraseña" />
            </Item>
              <Text>
                  ¿No tienes una cuenta?
              </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style ={misEstilos.boton}><Text>Iniciar</Text></Button>
            <Button
              title="Registrar"
              onPress={() => navigation.navigate('Registro')}/>
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
    backgroundColor:'yellow',
},
  textCenter:{
    textAlign: 'center',
    whith: "100%",
  },
  boton:{
    marginLeft: "30%"
  },
});


