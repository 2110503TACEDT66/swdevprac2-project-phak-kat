export default async function getUserProfile(token: string) {
    const response = await fetch('https://hotel-backend-i9e892ytr-tatatitutatuays-projects.vercel.app/api/v1/hotels/auth/me', {
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