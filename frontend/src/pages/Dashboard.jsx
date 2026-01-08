import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>Welcome back, Sarah!</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f0f0f0'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1.1rem' }}>Mentorship Sessions</h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#333', margin: '10px 0' }}>12</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>This month</p>
              </div>
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f0f0f0'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1.1rem' }}>Courses Completed</h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#333', margin: '10px 0' }}>8</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Total courses</p>
              </div>
              <div style={{
                background: 'white',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f0f0f0'
              }}>
                <h3 style={{ color: '#667eea', marginBottom: '10px', fontSize: '1.1rem' }}>Community Points</h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#333', margin: '10px 0' }}>450</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>Level 5</p>
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{ color: '#333', marginBottom: '20px', fontSize: '1.3rem' }}>Recent Activity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <p style={{ margin: 0, color: '#333', fontWeight: 500 }}>Completed course: "Leadership Skills for Women"</p>
                  <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>2 days ago</p>
                </div>
                <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <p style={{ margin: 0, color: '#333', fontWeight: 500 }}>Mentorship session with Dr. Emily Chen</p>
                  <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>5 days ago</p>
                </div>
                <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <p style={{ margin: 0, color: '#333', fontWeight: 500 }}>Joined community discussion: "Career Transitions"</p>
                  <p style={{ margin: '5px 0 0', color: '#666', fontSize: '0.9rem' }}>1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'courses':
        return (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>My Courses</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px'
            }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f0f0f0'
              }}>
                <div style={{
                  height: '150px',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  📚
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ color: '#333', marginBottom: '10px' }}>Leadership Skills for Women</h3>
                  <p style={{ color: '#666', marginBottom: '15px', fontSize: '0.9rem' }}>Develop essential leadership qualities and advance your career</p>
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#666' }}>Progress</span>
                      <span style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: 600 }}>100%</span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: '#e9ecef',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)'
                      }}></div>
                    </div>
                  </div>
                  <button style={{
                    padding: '10px 20px',
                    background: '#667eea',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}>
                    View Certificate
                  </button>
                </div>
              </div>

              <div style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f0f0f0'
              }}>
                <div style={{
                  height: '150px',
                  background: 'linear-gradient(135deg, #ff6b6b, #ff5252)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  💻
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ color: '#333', marginBottom: '10px' }}>Web Development Basics</h3>
                  <p style={{ color: '#666', marginBottom: '15px', fontSize: '0.9rem' }}>Learn HTML, CSS, and JavaScript fundamentals</p>
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#666' }}>Progress</span>
                      <span style={{ fontSize: '0.9rem', color: '#667eea', fontWeight: 600 }}>65%</span>
                    </div>
                    <div style={{
                      height: '8px',
                      background: '#e9ecef',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '65%',
                        height: '100%',
                        background: 'linear-gradient(45deg, #ff6b6b, #ff5252)'
                      }}></div>
                    </div>
                  </div>
                  <button style={{
                    padding: '10px 20px',
                    background: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}>
                    Continue Learning
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'mentorship':
        return (
          <div>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', color: '#333' }}>Mentorship</h2>
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f0f0f0',
              marginBottom: '25px'
            }}>
              <h3 style={{ color: '#333', marginBottom: '20px' }}>Your Mentor</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  👩‍💼
                </div>
                <div>
                  <h4 style={{ color: '#333', margin: '0 0 5px' }}>Dr. Emily Chen</h4>
                  <p style={{ color: '#666', margin: '0 0 5px', fontSize: '0.9rem' }}>Senior Director at Innovation Labs</p>
                  <p style={{ color: '#667eea', margin: 0, fontSize: '0.9rem' }}>⭐ 4.9 rating • 15 mentees</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button style={{
                  padding: '12px 25px',
                  background: '#667eea',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.95rem'
                }}>
                  Schedule Session
                </button>
                <button style={{
                  padding: '12px 25px',
                  background: 'white',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.95rem'
                }}>
                  Send Message
                </button>
              </div>
            </div>

            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <h3 style={{ color: '#333', marginBottom: '20px' }}>Upcoming Sessions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '20px', background: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <h4 style={{ color: '#333', margin: '0 0 5px' }}>Career Planning Session</h4>
                      <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>with Dr. Emily Chen</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: '#667eea', margin: 0, fontWeight: 600 }}>Tomorrow</p>
                      <p style={{ color: '#666', margin: 0, fontSize: '0.9rem' }}>2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        background: 'white',
        padding: '20px 30px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h1 style={{ color: '#667eea', fontSize: '1.5rem', margin: 0 }}>EmpowerHer</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button style={{
            padding: '8px 16px',
            background: 'white',
            color: '#667eea',
            border: '1px solid #667eea',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem'
          }}>
            🔔 Notifications
          </button>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.2rem'
          }}>
            S
          </div>
        </div>
      </header>

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <aside style={{
          width: '250px',
          background: 'white',
          padding: '30px 20px',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.05)',
          minHeight: 'calc(100vh - 80px)'
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                padding: '12px 16px',
                background: activeTab === 'overview' ? '#667eea' : 'white',
                color: activeTab === 'overview' ? 'white' : '#333',
                border: activeTab === 'overview' ? 'none' : '1px solid #e9ecef',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}
            >
              📊 Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              style={{
                padding: '12px 16px',
                background: activeTab === 'courses' ? '#667eea' : 'white',
                color: activeTab === 'courses' ? 'white' : '#333',
                border: activeTab === 'courses' ? 'none' : '1px solid #e9ecef',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}
            >
              📚 Courses
            </button>
            <button
              onClick={() => setActiveTab('mentorship')}
              style={{
                padding: '12px 16px',
                background: activeTab === 'mentorship' ? '#667eea' : 'white',
                color: activeTab === 'mentorship' ? 'white' : '#333',
                border: activeTab === 'mentorship' ? 'none' : '1px solid #e9ecef',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease'
              }}
            >
              👥 Mentorship
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '30px' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;