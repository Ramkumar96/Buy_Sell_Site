import React, { Component } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import outlineNotificationsNone from '@iconify/icons-ic/outline-notifications-none';
import '../css/sellHeader.css';

const sellHeader = () => {
    return (
        <div className="sell-header-container">
            <div className="d-flex justify-content-start">Buy&Sell</div>
            <div className="d-flex justify-content-end">
                <Icon icon={outlineNotificationsNone} style={{ color: '#ffffff',fontSize: '24px' }} />
                <a>
                    <div className="media">
                        <img src="../assets/profile.jpg"/> John crow
                    </div>
                </a>
            </div>
        </div>
    )
}

export default sellHeader