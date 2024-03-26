export default async function userRegister(userName :string, userEmail : string, userPassword : string, userRole : string) {
    const response = await fetch("https://hotel-backend-beta.vercel.app/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        password: userPassword,
        role: userRole
      }),
    });
    

    if (!response.ok) {
      throw new Error("Failed to register");
    }

    return await response.json();
}
