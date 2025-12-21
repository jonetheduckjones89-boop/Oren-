const API_BASE_URL = 'https://the-final-backhend.onrender.com';

export const apiClient = {
    async postInquiry(data: any) {
        try {
            const response = await fetch(`${API_BASE_URL}/api/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return await response.json().catch(() => ({ success: true }));
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },
};
