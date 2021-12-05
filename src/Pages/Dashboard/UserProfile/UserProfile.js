import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const UserProfile = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <h6 className="theme-color lead">{user.displayName || user.name} &amp; UI designer based in Canada</h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{user.email}</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>01862055394</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Address</label>
                                            <p>Canada</p>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={user.photoURL || 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} alt="" style={{ width: '70%', height: '100%', alignItems: 'center', justifyContent: 'center' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;