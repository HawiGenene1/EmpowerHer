import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333'
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '120px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '20px', fontWeight: 700 }}>
            EmpowerHer
          </h1>
          <p style={{ fontSize: '1.4rem', marginBottom: '40px', opacity: 0.95 }}>
            Empowering Women Through Skills, Mentorship, and Community Support
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <button style={{
              padding: '15px 35px',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1.1rem',
              background: 'linear-gradient(45deg, #ff6b6b, #ff5252)',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              Get Started
            </button>
            <button style={{
              padding: '15px 35px',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: '1.1rem',
              background: 'transparent',
              color: 'white',
              border: '2px solid white',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}>
              Login
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 20px', background: '#f8f9fa', textAlign: 'center' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#667eea', marginBottom: '10px' }}>
              10,000+
            </div>
            <div style={{ fontSize: '1.1rem', color: '#666', fontWeight: 500 }}>
              Women Empowered
            </div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#667eea', marginBottom: '10px' }}>
              500+
            </div>
            <div style={{ fontSize: '1.1rem', color: '#666', fontWeight: 500 }}>
              Expert Mentors
            </div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#667eea', marginBottom: '10px' }}>
              100+
            </div>
            <div style={{ fontSize: '1.1rem', color: '#666', fontWeight: 500 }}>
              Courses Available
            </div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 700, color: '#667eea', marginBottom: '10px' }}>
              50+
            </div>
            <div style={{ fontSize: '1.1rem', color: '#666', fontWeight: 500 }}>
              Partner Companies
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '100px 20px', background: 'white', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#333', fontWeight: 700 }}>
          Our Features
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
          Discover the tools and resources designed to accelerate your professional growth
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.5rem',
              color: 'white'
            }}>
              👥
            </div>
            <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '1.4rem', fontWeight: 600 }}>
              Mentorship
            </h3>
            <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>
              Connect with experienced mentors who provide personalized guidance and career advice.
            </p>
          </div>
          <div style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.5rem',
              color: 'white'
            }}>
              📚
            </div>
            <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '1.4rem', fontWeight: 600 }}>
              Learning
            </h3>
            <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>
              Access comprehensive courses and workshops to develop in-demand skills.
            </p>
          </div>
          <div style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            border: '1px solid #f0f0f0'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '1.5rem',
              color: 'white'
            }}>
              💬
            </div>
            <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '1.4rem', fontWeight: 600 }}>
              Community Forum
            </h3>
            <p style={{ color: '#666', lineHeight: 1.6, fontSize: '1rem' }}>
              Join a vibrant community of supportive women for networking and support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', fontWeight: 700 }}>
          Ready to Transform Your Career?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.95, maxWidth: '600px', margin: '0 auto 40px' }}>
          Join thousands of women building successful careers with our support
        </p>
        <button style={{
          padding: '15px 40px',
          borderRadius: '50px',
          fontWeight: 600,
          fontSize: '1.1rem',
          background: 'white',
          color: '#667eea',
          border: 'none',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          Start Your Journey Today
        </button>
      </section>

      {/* Footer */}
      <footer style={{ background: '#2c3e50', color: 'white', padding: '60px 20px 30px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '20px', color: 'white', fontSize: '1.3rem' }}>
            About EmpowerHer
          </h3>
          <p style={{ color: '#bdc3c7', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 40px' }}>
            EmpowerHer is a comprehensive platform dedicated to empowering women through mentorship, education, and community support.
          </p>
          <div style={{ borderTop: '1px solid #34495e', paddingTop: '30px', color: '#bdc3c7' }}>
            <p>&copy; 2026 EmpowerHer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
