/* Shared client-side admin authentication for the static site. */

const ADMIN_AUTH_KEY = "ironforgeAdminAuthenticated";
const ADMIN_LOGIN_PAGE = "admin-login.html";
const ADMIN_DASHBOARD_PAGE = "dashboard.html";

function isAdminAuthenticated() {
    return localStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

function requireAdminAuth() {
    if (!isAdminAuthenticated()) {
        window.location.replace(ADMIN_LOGIN_PAGE);
        return false;
    }

    return true;
}

function logoutAdmin() {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    window.location.replace(ADMIN_LOGIN_PAGE);
}

function authenticateAdmin(username, password) {
    const validCredentials =
        username === "gym_management" &&
        password === "Arbeit@1";

    if (validCredentials) {
        localStorage.setItem(ADMIN_AUTH_KEY, "true");
    }

    return validCredentials;
}
