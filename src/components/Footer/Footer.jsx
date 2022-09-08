import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
       

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>ClassDojo</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Signup now
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Company</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                        About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Press
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Engineering
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Accessibiliity
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Resources</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                   Big ideas
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Resources
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Training
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Remote Learning
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    ClassDojo Plus
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Support</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Privacy Center
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cookies settings
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Product Privacy Policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Community</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Teacher Community
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Instagram
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         ClassDojo,Inc
        </a>
      </div>
    </MDBFooter>
  );
}