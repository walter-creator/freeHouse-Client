// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour obtenir la liste des médias de service
export async function listServiceMedias() {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/serviceMedias`);
        const medias = await response.json();
        if (!response.ok) return Promise.reject(response);
        return medias;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour créer un média de service
export async function saveServiceMedia(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/serviceMedias`, {
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

// Fonction pour obtenir un média de service par ID
export async function getServiceMedia(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/serviceMedias/${id}`);
        const media = await response.json();
        if (!response.ok) return Promise.reject(response);
        return media;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour mettre à jour un média de service
export async function updateServiceMedia(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/serviceMedias/${id}`, {
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

// Fonction pour supprimer un média de service
export async function deleteServiceMedia(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/serviceMedias/${id}`, {
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

// Fonction pour obtenir tous les médias d'un service par ID de service
export async function getServiceMediasByServiceId(serviceId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/serviceMedias/service/${serviceId}`);
        const medias = await response.json();
        if (!response.ok) return Promise.reject(response);
        return medias;
    } catch (error) {
        return Promise.reject(error);
    }
}
