// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour obtenir les discussions d'un utilisateur
export async function getDiscussionsForUser(userId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/discussions/user/${userId}`);
        const discussions = await response.json();
        if (!response.ok) return Promise.reject(response);
        return discussions;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour créer une nouvelle discussion
export async function createDiscussion(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/discussions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const discussion = await response.json();
        if (!response.ok) return Promise.reject(response);
        return discussion;
    } catch (error) {
        return Promise.reject(error);
    }
}
