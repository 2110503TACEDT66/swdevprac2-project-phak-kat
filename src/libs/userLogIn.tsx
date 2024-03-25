export default async function userLogIn(userEmail: string, userPassword: string) {
    const response = await fetch('https://hotel-backend-i9e892ytr-tatatitutatuays-projects.vercel.app/api/v1/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: userEmail, password: userPassword })
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Invalid login');
    }
}