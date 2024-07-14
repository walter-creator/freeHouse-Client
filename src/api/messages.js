// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour obtenir les messages d'une discussion
export async function getMessagesForDiscussion(discussionId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/messages/discussion/${discussionId}`);
        const messages = await response.json();
        if (!response.ok) return Promise.reject(response);
        return messages;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour créer un message
export async function createMessage(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const message = await response.json();
        if (!response.ok) return Promise.reject(response);
        return message;
    } catch (error) {
        return Promise.reject(error);
    }
}
