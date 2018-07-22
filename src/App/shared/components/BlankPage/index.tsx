import * as React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from 'native-base';

import styles from './styles';
export interface IProps {
  navigation: any;
}
export interface IState {}
class BlankPage extends React.Component<IProps, IState> {
  render() {
    const param = this.props.navigation.state.params;
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>{param ? param.name.item : 'Blank Page'}</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          <Text>
            {param !== undefined ? param.name.item : 'Create Something Awesome . . .'}
          </Text>
        </Content>
      </Container>
    );
  }
}

export default BlankPage;
