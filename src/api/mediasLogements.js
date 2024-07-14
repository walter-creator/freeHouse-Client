// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour obtenir la liste des médias
export async function listMedias() {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logementMedias`);
        const medias = await response.json();
        if (!response.ok) return Promise.reject(response);
        return medias;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour créer un média
export async function saveMedia(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logementMedias`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const media = await response.json();
        if (!response.ok) return Promise.reject(response);
        return media;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour obtenir un média par ID
export async function getMedia(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logementMedias/${id}`);
        const media = await response.json();
        if (!response.ok) return Promise.reject(response);
        return media;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour mettre à jour un média
export async function updateMedia(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logementMedias/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const media = await response.json();
        if (!response.ok) return Promise.reject(response);
        return media;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour supprimer un média
export async function deleteMedia(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logementMedias/${id}`, {
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

// Fonction pour obtenir tous les médias par logement
export async function getMediaByLogementId(logementId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logementMedias/logement/${logementId}`);
        const medias = await response.json();
        if (!response.ok) return Promise.reject(response);
        return medias;
    } catch (error) {
        return Promise.reject(error);
    }
}
