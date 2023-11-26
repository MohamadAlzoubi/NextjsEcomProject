import React, { useState } from 'react';
import axios from 'axios';

const DataSubmit = () => {
    const [formData, setFormData] = useState({
        name: '',
        tele: '',
        inv: ''
        // other fields
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://www.notion.so/10f82da54ed549549b4c5bfbd00a6076?v=f69320f31d4d46ca9bd47db8095d63b4', {
                parent: { database_id: '10f82da54ed549549b4c5bfbd00a60769' },
                properties: {
                    // Replace these with your Notion database's properties
                    'Name': {
                        title: [
                            {
                                text: {
                                    content: "test",
                                },
                            },
                        ],
                    },
                    'Telegram': {
                        rich_text: [
                            {
                                text: {
                                    content: 'Test',
                                },
                            },
                        ],
                    },
                    'Investment': {
                        rich_text: [
                            {
                                text: {
                                    content: 'Test',
                                },
                            },
                        ],
                    },
                    // other properties
                },
            }, {
                headers: {
                    'Authorization': `Bearer secret_ajUoJ6iPB2HM4aYOaFmTgVGjcltvdkRJNbb9Ax1dv4h`,
                    'Notion-Version': '2021-08-16',
                    'Content-Type': 'application/json',
                },
            });
            console.log('Form data sent to Notion:', response.data);
        } catch (error) {
            console.error('Error sending form data to Notion:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="Investment" value={formData.inv} onChange={handleInputChange} placeholder="Name" />
            <input type="text" name="Telegram" value={formData.tele} onChange={handleInputChange} placeholder="Email" />
            <input type="text" name="Name" value={formData.name} onChange={handleInputChange} placeholder="Email" />
            {/* other input fields */}
            <button type="submit">Submit</button>
        </form>
    );
};

export default DataSubmit;