// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour s'inscrire (signup)
export async function signup(data) {
    try {
        const response = await fetch(`${API_URL}/api/v1/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const user = await response.json();
        if (!response.ok) return Promise.reject(response);
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour se connecter (signin)
export async function signin(data) {
    try {
        const response = await fetch(`${API_URL}/api/v1/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const authResponse = await response.json();
        if (!response.ok) return Promise.reject(response);
        return authResponse;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour rafraîchir le token (refresh)
export async function refreshToken(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/v1/auth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const authResponse = await response.json();
        if (!response.ok) return Promise.reject(response);
        return authResponse;
    } catch (error) {
        return Promise.reject(error);
    }
}
