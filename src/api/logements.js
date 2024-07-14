// api.js
import { API_URL } from ".";
import fetchWithAuth from "./http";

// Fonction pour obtenir la liste des logements
export async function listLogements() {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements`);
        const logements = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logements;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour créer un logement
export async function saveLogement(data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour obtenir un logement par ID
export async function getLogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements/${id}`);
        const logement = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour mettre à jour un logement
export async function updateLogement(id, data) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour supprimer un logement
export async function deleteLogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements/${id}`, {
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

// Fonction pour obtenir tous les logements par utilisateur
export async function getAllLogementsByUserId(userId) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements/user/${userId}`);
        const logements = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logements;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour valider un logement
export async function validateLogement(id) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements/${id}/validate`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}

// Fonction pour rejeter un logement avec un motif
export async function rejectLogement(id, motif) {
    try {
        const response = await fetchWithAuth(`${API_URL}/api/logements/${id}/reject`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ motif })
        });

        const logement = await response.json();
        if (!response.ok) return Promise.reject(response);
        return logement;
    } catch (error) {
        return Promise.reject(error);
    }
}
