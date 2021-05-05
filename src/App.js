import React from 'react';
import './App.css';
import { ThemeProvider } from 'theme-ui';
import theme from '@rebass/preset';
import { Flex, Box, Text } from 'rebass';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Manager from './layout/Manager';
import FormCep from './components/FormCep/FormCep';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box maxWidth='700px' margin='0 auto'>
          <Flex px={2} alignItems='center'>
            <Text p={2} fontWeight='bold'>
              Test demos
            </Text>
            <Box mx='auto' />
            <Link to='/rewards-manager' style={{marginRight: '20px'}}>Gerenciador de recompensas</Link>
            <Link to='/form-cep'>Formulário de endereço</Link>
          </Flex>
          <Switch>
            <Route path='/rewards-manager'>
              <Manager />
            </Route>
            <Route path='/form-cep'>
              <FormCep />
            </Route>
          </Switch>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
