import jwtDecode from "jwt-decode";
import {
  createContext,
  useContext,
  useMemo,
} from "react";
import { useQuery } from "react-query";
import { useLocalStorage } from "usehooks";
import { retrieveUser } from "../api";
import { isAdmin as userIsAdmin } from "../functions";

// Crée un contexte avec une valeur par défaut
const UserContext = createContext({
  user: null,
  isAdmin: false,
});

// Définition du composant AuthProvider
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [token, setToken] = useLocalStorage("token", null);
  const id = useMemo(() => {
    if (!token) return;
    try {
      const { sub } = jwtDecode(token);
      return +sub;
    } catch (error) {
      return;
    }
  }, [token]);

  const { data: user } = useQuery(["users", id], () => retrieveUser(id), {
    enabled: !!id,
    onError: () => setToken(null),
  });

  return (
    <UserContext.Provider value={{ user, isAdmin: userIsAdmin(user) }}>
      {children}
    </UserContext.Provider>
  );
}

// Définition du hook personnalisé useAuth
export function useAuth() {
  return useContext(UserContext);
}
