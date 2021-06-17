import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen'
import Footer from './components/Footer';

const App = () => {
  return (


    <Router>

      <Header />

      <main className='py-5'>
        <Container>
          <Route path='/' component={ HomeScreen } exact />
        </Container>        
      </main>

      <Footer />      

    </Router>
  );
}

export default App;
