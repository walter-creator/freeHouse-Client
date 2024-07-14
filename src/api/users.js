// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour obtenir tous les utilisateurs
export async function listUsers() {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/users`);
        const data = await response.json();
        if (!response.ok) return Promise.reject(response);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour créer un utilisateur
export async function saveUser(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/users`, {
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

// Fonction pour obtenir un utilisateur par ID
export async function getUser(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/users/${id}`);
        const user = await response.json();
        if (!response.ok) return Promise.reject(response);
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour mettre à jour un utilisateur
export async function updateUser(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/users/${id}`, {
            method: 'PUT',
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

// Fonction pour supprimer un utilisateur
export async function deleteUser(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) return Promise.reject(response);
    } catch (error) {
        return Promise.reject(error);
    }
}
