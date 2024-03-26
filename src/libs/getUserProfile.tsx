export default async function getUserProfile(token: string) {
    const response = await fetch('https://hotel-backend-beta.vercel.app/api/v1/auth/me', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }   
    else {
        throw new Error('Failed to get user profile');
    }
}