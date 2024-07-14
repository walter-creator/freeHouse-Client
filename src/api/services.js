// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour obtenir la liste des services
export async function listServices() {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/services`);
        const services = await response.json();
        if (!response.ok) return Promise.reject(response);
        return services;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour créer un service
export async function saveService(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/services`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const service = await response.json();
        if (!response.ok) return Promise.reject(response);
        return service;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour obtenir un service par ID
export async function getService(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/services/${id}`);
        const service = await response.json();
        if (!response.ok) return Promise.reject(response);
        return service;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour mettre à jour un service
export async function updateService(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/services/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const service = await response.json();
        if (!response.ok) return Promise.reject(response);
        return service;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour supprimer un service
export async function deleteService(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/services/${id}`, {
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

// Fonction pour obtenir tous les services par utilisateur
export async function getAllServicesByUserId(userId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/services/user/${userId}`);
        const services = await response.json();
        if (!response.ok) return Promise.reject(response);
        return services;
    } catch (error) {
        return Promise.reject(error);
    }
}
